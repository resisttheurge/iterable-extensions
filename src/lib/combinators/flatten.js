import Iterable from 'Iterable'

export default (iterable) =>
  new Iterable(function * () {
    for (let elem of iterable) {
      if (Iterable.isIterable(elem)) {
        yield * elem
      } else {
        yield elem
      }
    }
  })
