import Iterable from 'Iterable'

export const takeWhile = (iterable, predicate) =>
  new Iterable(function * () {
    for (let elem of iterable) {
      if (!predicate(elem)) {
        break
      }
      yield elem
    }
  })

export default takeWhile
