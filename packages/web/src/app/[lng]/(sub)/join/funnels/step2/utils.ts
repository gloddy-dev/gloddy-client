export function formatAddress(searchWord: string) {
  const simplified = searchWord.replace(/\s*\([^)]*\)/, '').trim();
  return simplified;
}
