import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
import Iterable from 'Iterable'

export const onElement =
  (iterable, f = (elem, iterable) => {}) =>
    new Iterable(function * () {
      for (let elem of iterable) {
        yield elem
        f(elem, iterable)
      }
    })

export default infix(guardIterable(onElement))
