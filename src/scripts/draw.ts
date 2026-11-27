type Entry = {
  id: string;
  name: string;
  family: string;
  img: string;
  url: string;
};
type Phase = 'idle' | 'shuffle' | 'deal' | 'choose' | 'turn' | 'revealed';
const el = <T extends HTMLElement = HTMLElement>(id: string) =>
  document.getElementById(id) as T;
const ritual = el('ritual'),
  table = el('table'),
  en = ritual.dataset.lang === 'en';
const cards: Entry[] = JSON.parse(el('draw-data').textContent!);
const buttons = Array.from(
  ritual.querySelectorAll<HTMLButtonElement>('.playing-card'),
);
const launch = el<HTMLButtonElement>('shuffle'),
  deckStart = el<HTMLButtonElement>('deck-start'),
  read = el<HTMLAnchorElement>('read'),
  reset = el<HTMLButtonElement>('reset-draw');
const live = el('live-copy'),
  title = el('stage-heading'),
  caption = el('deck-caption'),
  detail = el('stage-desc');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
let phase: Phase = 'idle',
  hand: Entry[] = [],
  selected = -1;
const eyebrow = el('ritual-label');
const deckLabel = eyebrow.textContent;
const labels = en
  ? {
      mix: 'Shuffling…',
      pick: 'Choose a card.',
      pickHint:
        'Five cards, face down. Pick the one your eye keeps coming back to.',
      table: 'Choose from the five cards',
      yours: 'Your card',
      mixing: 'Hold your question in mind while the deck is cut.',
      dealing: 'Laying out the cards…',
      flip: 'Turning your card…',
      result: 'Your card is',
    }
  : {
      mix: 'On mélange…',
      pick: 'Choisis ta carte.',
      pickHint:
        'Cinq cartes, face cachée. Choisis celle sur laquelle ton regard revient.',
      table: 'À toi de choisir',
      yours: 'Ta carte',
      mixing: 'Garde ta question en tête pendant qu’on coupe le jeu.',
      dealing: 'On étale les cartes…',
      flip: 'Ta carte se retourne…',
      result: 'Ta carte est',
    };
function setPhase(next: Phase) {
  phase = next;
  ritual.dataset.phase = next;
}
// The next gesture becomes available when the visible motion has actually finished.
async function settleCards() {
  if (reduced.matches) return;
  const animations = buttons.flatMap((button) =>
    button.getAnimations({ subtree: true }),
  );
  await Promise.allSettled(animations.map((animation) => animation.finished));
}
function announce(value: string) {
  el('announce').textContent = value;
}
function deal() {
  const pool = cards.slice();
  return buttons.map(
    () => pool.splice(Math.floor(Math.random() * pool.length), 1)[0],
  );
}
function showButtons(active: boolean) {
  buttons.forEach((b) => (b.disabled = !active));
}
function choose(focus: boolean) {
  setPhase('choose');
  title.textContent = labels.pick;
  detail.textContent = labels.pickHint;
  caption.textContent = labels.table;
  showButtons(true);
  announce(labels.pick + ' ' + labels.pickHint);
  if (focus) buttons[0].focus({ preventScroll: true });
}
function showHand() {
  el('intro-copy').hidden = true;
  live.hidden = false;
  detail.hidden = false;
  eyebrow.textContent = deckLabel;
  launch.hidden = true;
  read.hidden = true;
  reset.hidden = true;
  el('aside-note').hidden = true;
  deckStart.hidden = true;
}
async function shuffle(event: MouseEvent) {
  if (phase !== 'idle' && phase !== 'revealed') return;
  selected = -1;
  hand = deal();
  showHand();
  showButtons(false);
  buttons.forEach((b) => {
    b.classList.remove('chosen');
    b.querySelector('.face')!.replaceChildren();
  });
  setPhase('shuffle');
  title.textContent = labels.mix;
  detail.textContent = labels.mixing;
  caption.textContent = labels.mix;
  announce(labels.mixing);
  if (window.matchMedia('(max-width: 740px)').matches)
    table.scrollIntoView({
      block: 'nearest',
      behavior: reduced.matches ? 'instant' : 'smooth',
    });
  await settleCards();
  setPhase('deal');
  caption.textContent = labels.dealing;
  await settleCards();
  choose(event.detail === 0);
}
function finish(focus: boolean) {
  const card = hand[selected];
  setPhase('revealed');
  title.textContent = card.name;
  detail.hidden = true;
  eyebrow.textContent = labels.yours;
  caption.textContent = card.family;
  read.href = card.url;
  read.hidden = false;
  reset.hidden = false;
  announce(labels.result + ' ' + card.name + '. ' + card.family);
  if (focus) read.focus({ preventScroll: true });
}
async function turn(index: number, focus: boolean, immediate = false) {
  if (phase !== 'choose') return;
  selected = index;
  const card = hand[index],
    btn = buttons[index];
  const image = new Image();
  image.alt = card.name;
  const face = btn.querySelector('.face')!;
  const placeholder = document.createElement('span');
  placeholder.textContent = card.name;
  face.replaceChildren(placeholder);
  image.addEventListener(
    'load',
    () => {
      if (face.firstChild === placeholder) face.replaceChildren(image);
    },
    { once: true },
  );
  image.src = card.img;
  btn.classList.add('chosen');
  setPhase('turn');
  showButtons(false);
  caption.textContent = labels.flip;
  announce(labels.flip);
  title.textContent = labels.yours;
  detail.hidden = true;
  if (!immediate) await settleCards();
  finish(focus);
}
launch.addEventListener('click', shuffle);
deckStart.addEventListener('click', shuffle);
reset.addEventListener('click', shuffle);
buttons.forEach((button, index) => {
  button.addEventListener('click', (event) => turn(index, event.detail === 0));
  button.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    const direction = event.key === 'ArrowLeft' ? -1 : 1;
    buttons[(index + direction + buttons.length) % buttons.length].focus();
  });
});
// Carry the hand across the language link without exposing face-down identities in the URL.
const key = 'osho-zen:language-hand';
document
  .querySelector<HTMLAnchorElement>('[data-switch-lang]')
  ?.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    try {
      if (phase === 'idle') sessionStorage.removeItem(key);
      else
        sessionStorage.setItem(
          key,
          JSON.stringify({
            to: en ? 'fr' : 'en',
            ids: hand.map((c) => c.id),
            selected,
            time: Date.now(),
          }),
        );
    } catch {}
  });
try {
  const saved = JSON.parse(sessionStorage.getItem(key) ?? 'null');
  sessionStorage.removeItem(key);
  if (
    saved?.to === ritual.dataset.lang &&
    Date.now() - saved.time < 60000 &&
    Array.isArray(saved.ids) &&
    saved.ids.length === buttons.length
  ) {
    const restored = saved.ids.map((id: string) =>
      cards.find((c) => c.id === id),
    );
    if (restored.every(Boolean) && new Set(saved.ids).size === buttons.length) {
      hand = restored;
      showHand();
      choose(false);
      if (
        Number.isInteger(saved.selected) &&
        saved.selected >= 0 &&
        saved.selected < buttons.length
      )
        turn(saved.selected, false, true);
    }
  }
} catch {}
