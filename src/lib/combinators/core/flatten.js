import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
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

export default infix(guardIterable(flatten))
