export default function appendToEachArrayValue(array, appendString) {
  let result = []
  for (let value of array) {
    result.push(appendString + value);
  }

  return result;
}
