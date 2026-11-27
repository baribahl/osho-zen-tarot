import source from '../data/osho_cards.json';

import english from '../data/readings.en.json';

export type Lang = 'fr' | 'en';
export type Card = (typeof source)[number];
export const deck = source;
type Reading = Pick<Card, 'name' | 'main_text' | 'commentary'>;
const translations: Record<string, Reading> = english;
export function reading(card: Card, lang: Lang): Reading {
  if (lang === 'fr') return card;
  const result = translations[card.card_number];
  if (!result)
    throw new Error('Missing English reading for ' + card.card_number);
  return result;
}
export const families = [
  {
    key: 'major',
    source: 'Majeures',
    fr: 'Arcanes majeurs',
    en: 'Major Arcana',
    cover: 22,
    color: '#6a4168',
  },
  {
    key: 'fire',
    source: 'Feu',
    fr: 'Feu',
    en: 'Fire',
    cover: 23,
    color: '#a14d35',
  },
  {
    key: 'water',
    source: 'Eau',
    fr: 'Eau',
    en: 'Water',
    cover: 41,
    color: '#33636d',
  },
  {
    key: 'clouds',
    source: 'Nuages',
    fr: 'Nuages',
    en: 'Clouds',
    cover: 55,
    color: '#696580',
  },
  {
    key: 'rainbows',
    source: 'Arc-en-ciel',
    fr: 'Arc-en-ciel',
    en: 'Rainbows',
    cover: 70,
    color: '#65734a',
  },
] as const;
export function familyOf(card: Card) {
  return families.find((f) => f.source === card.arcana_family) ?? families[0];
}
export function rank(card: Card, lang: Lang) {
  if (card.arcana_type === 'major') return card.arcana_detail ?? '';
  const ranks: Record<string, string> = {
    Roi: 'King',
    Reine: 'Queen',
    Cavalier: 'Knight',
    Valet: 'Page',
    As: 'Ace',
  };
  const position = card.arcana_position ?? '';
  return lang === 'en' ? (ranks[position] ?? position) : position;
}
export function route(
  lang: Lang,
  page: 'home' | 'gallery' | 'about' | 'card',
  id = '',
) {
  const paths =
    lang === 'fr'
      ? ['/', '/cartes/', '/a-propos/', '/carte/']
      : ['/en/', '/en/cards/', '/en/about/', '/en/cards/'];
  return (
    paths[['home', 'gallery', 'about', 'card'].indexOf(page)] +
    (page === 'card' ? id + '/' : '')
  );
}
