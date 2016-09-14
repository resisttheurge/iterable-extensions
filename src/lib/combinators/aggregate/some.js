import Iterable from 'Iterable'

export const some = (iterable, predicate) =>
  new Iterable(function * () {
    for (let elem of iterable) {
      if (predicate(elem)) {
        return true
      }
    }
    return false
  })

export default some
