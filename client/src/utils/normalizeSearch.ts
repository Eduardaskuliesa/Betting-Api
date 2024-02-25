const normalizeText = (text: string): string => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const matchFilter = (match: Match, searchTerm: string): boolean => {
  const searchTermNormalized = normalizeText(searchTerm);
  return (
    normalizeText(match.League).includes(searchTermNormalized)
    || normalizeText(match['Away Team']).includes(searchTermNormalized)
    || normalizeText(match['Home Team']).includes(searchTermNormalized)
  );
};

const searchFilter = {
  normalizeText,
  matchFilter,
};

export default searchFilter;
