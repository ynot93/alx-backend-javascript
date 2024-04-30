export default function updateUniqueItems(groceryMap) {
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  groceryMap.forEach((value, key) => {
    if (value === 1) {
      groceryMap.set(key, 100);
    }
  });

  return groceryMap;
}
