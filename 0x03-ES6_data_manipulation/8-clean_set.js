export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const filteredValues = Array.from(set)
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((item) => item.substring(startString.length));

  return filteredValues.join('-');
}
