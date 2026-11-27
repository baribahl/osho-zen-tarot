import { deck, familyOf, rank, reading, type Lang } from '../lib/deck';
export function getStaticPaths() {
  return ['fr', 'en'].map((lang) => ({ params: { lang } }));
}
export function GET({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;
  return new Response(
    JSON.stringify(
      deck.map((card) => {
        const { main_text, commentary } = reading(card, lang);
        return {
          id: card.card_number,
          arcana: familyOf(card)[lang] + ' ' + rank(card, lang),
          main_text,
          commentary: commentary.split(/\n---/)[0],
        };
      }),
    ),
    { headers: { 'Content-Type': 'application/json' } },
  );
}
