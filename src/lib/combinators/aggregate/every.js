import Iterable from 'Iterable'

export const every = (iterable, predicate) =>
  new Iterable(function * () {
    for (let elem of iterable) {
      if (!predicate(elem)) {
        return false
      }
    }
    return true
  })

export default every
