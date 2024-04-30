export default function hasValuesFromArray(set, array) {
  return array.every((obj) => set.has(obj));
}
