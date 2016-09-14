export const some = (iterable, predicate) => {
  for (let elem of iterable) {
    if (predicate(elem)) {
      return true
    }
  }
  return false
}

export default some
