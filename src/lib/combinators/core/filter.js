import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
import Iterable from 'Iterable'

export const filter = (iterable, predicate) =>
  new Iterable(function * () {
    for (let elem of iterable) {
      if (predicate(elem)) {
        yield elem
      }
    }
  })

export default infix(guardIterable(filter))
