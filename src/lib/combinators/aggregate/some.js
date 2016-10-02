import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
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

export default infix(guardIterable(some))
