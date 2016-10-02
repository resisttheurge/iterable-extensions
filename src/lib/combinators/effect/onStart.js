import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
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

export default infix(guardIterable(onStart))
