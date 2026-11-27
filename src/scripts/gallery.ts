import Fuse from 'fuse.js';
const root = document.querySelector<HTMLElement>('[data-gallery]')!;
const en = root.dataset.lang === 'en',
  input = document.querySelector<HTMLInputElement>('#search')!;
const grid = root.querySelector<HTMLElement>('.gallery-grid')!;
const entries = Array.from(
  root.querySelectorAll<HTMLAnchorElement>('.gallery-card'),
);
const chips = Array.from(
  root.querySelectorAll<HTMLButtonElement>('[data-family]'),
);
const more = document.querySelector<HTMLButtonElement>('#more')!,
  count = document.querySelector<HTMLElement>('#count')!;
const switchLang =
  document.querySelector<HTMLAnchorElement>('[data-switch-lang]')!;
const params = new URLSearchParams(location.search);
let family = chips.some((c) => c.dataset.family === params.get('family'))
  ? params.get('family')!
  : '';
let limit = 15,
  request = 0;
input.value = params.get('q') ?? '';
const fold = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
const basic = entries.map((a) => ({
  id: a.dataset.id!,
  name: a.dataset.name!,
  alias: a.dataset.alias!,
}));
const names = new Fuse(basic, {
  keys: ['name', 'alias'],
  ignoreDiacritics: true,
  threshold: 0.32,
  ignoreLocation: true,
});
type TextEntry = {
  id: string;
  arcana: string;
  main_text: string;
  commentary: string;
};
let full: Promise<Fuse<TextEntry>> | undefined;
function textIndex() {
  return (full ??= fetch('/' + root.dataset.lang + '-search.json')
    .then(async (response) => {
      if (!response.ok) throw new Error('Search index unavailable');
      return new Fuse<TextEntry>(await response.json(), {
        keys: ['arcana', 'main_text', 'commentary'],
        ignoreDiacritics: true,
        ignoreLocation: true,
        threshold: 0.19,
      });
    })
    .catch((e) => {
      full = undefined;
      throw e;
    }));
}
function render(ids: Set<string> | undefined, query: string, append = false) {
  const order = ids
    ? new Map(Array.from(ids, (id, index) => [id, index]))
    : undefined;
  const ordered = order
    ? [...entries].sort(
        (a, b) =>
          (order.get(a.dataset.id!) ?? Infinity) -
          (order.get(b.dataset.id!) ?? Infinity),
      )
    : entries;
  const matches = ordered.filter(
    (a) =>
      (!family || a.dataset.suit === family) &&
      (!ids || ids.has(a.dataset.id!)),
  );
  const visible = new Set(matches.slice(0, limit)),
    params = new URLSearchParams();
  if (family) params.set('family', family);
  if (query) params.set('q', query);
  if (append) params.set('show', String(limit));
  const suffix = params.size ? '?' + params.toString() : '';
  if (location.search !== suffix)
    history.replaceState(null, '', location.pathname + suffix);
  switchLang.search = suffix;
  for (const item of ordered) {
    item.hidden = !visible.has(item);
    if (!item.hidden) item.search = suffix;
  }
  if (ordered.some((item, i) => grid.children[i] !== item))
    grid.append(...ordered);
  chips.forEach((c) =>
    c.setAttribute('aria-pressed', String(c.dataset.family === family)),
  );
  count.textContent =
    matches.length +
    ' ' +
    (en ? 'card' : 'carte') +
    (matches.length === 1 ? '' : 's');
  more.hidden = visible.size === matches.length;
  document.querySelector<HTMLElement>('#empty')!.hidden = matches.length > 0;
}
async function filter(append = false) {
  const version = ++request,
    query = input.value.trim(),
    term = fold(query);
  if (!term) {
    render(undefined, query, append);
    return;
  }
  const ids = new Set(names.search(query).map((r) => r.item.id));
  for (const item of basic)
    if (
      item.id === term ||
      fold(item.name).includes(term) ||
      fold(item.alias).includes(term)
    )
      ids.add(item.id);
  render(ids, query, append);
  if (term.length < 3) return;
  try {
    const index = await textIndex();
    if (version !== request) return;
    for (const r of index.search(query)) ids.add(r.item.id);
    render(ids, query, append);
  } catch {
    /* Name and number search stay available offline. */
  }
}
chips.forEach((c) =>
  c.addEventListener('click', () => {
    family = c.dataset.family!;
    limit = 15;
    void filter();
  }),
);
input.addEventListener('input', () => {
  limit = 15;
  void filter();
});
more.addEventListener('click', () => {
  const previous = entries.filter((a) => !a.hidden);
  limit += 15;
  void filter(true).then(() =>
    Array.from(grid.querySelectorAll<HTMLAnchorElement>('.gallery-card'))
      .find((a) => !a.hidden && !previous.includes(a))
      ?.focus({ preventScroll: true }),
  );
});
document.querySelector('#clear')!.addEventListener('click', () => {
  family = '';
  input.value = '';
  limit = 15;
  void filter();
  input.focus();
});
limit = Math.max(
  15,
  Math.min(entries.length, parseInt(params.get('show') ?? '15', 10) || 15),
);
void filter(limit > 15);
