export default async (iterable, predicate) => {
  for (let elem of iterable) {
    if (!predicate(elem)) {
      return false
    }
  }
  return true
}
