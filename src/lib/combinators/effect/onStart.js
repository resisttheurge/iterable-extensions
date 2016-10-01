import Iterable from 'Iterable'

export const onStart =
  (iterable, f = (first, iterable) => {}) =>
    new Iterable(function * () {
      let started = false
      for (let elem of iterable) {
        if (!started) {
          f(yield elem, iterable)
          started = true
        } else {
          yield elem
        }
      }
    })

export default onStart
