import Iterable from 'Iterable'

export const flatten = (iterable) =>
  new Iterable(function * () {
    for (let elem of iterable) {
      if (Iterable.isIterable(elem)) {
        yield * elem
      } else {
        yield elem
      }
    }
  })

export default flatten
