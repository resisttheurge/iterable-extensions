export const every = (iterable, predicate) => {
  for (let elem of iterable) {
    if (!predicate(elem)) {
      return false
    }
  }
  return true
}

export default every
