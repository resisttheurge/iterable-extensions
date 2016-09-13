import Iterable from 'Iterable'

export default (iterable, predicate) =>
  new Iterable(function * () {
    for (let elem of iterable) {
      if (predicate(iterable)) {
        yield elem
      }
    }
  })
