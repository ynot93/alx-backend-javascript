export default function iterateThroughObject(reportWithIterator) {
  const names = [];
  let result = reportWithIterator.next();
  while (!result.done) {
    names.push(result.value);
    result = reportWithIterator.next();
  }
  return names.join(' | ');
}
