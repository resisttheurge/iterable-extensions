import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
import Iterable from 'Iterable'

export const onComplete =
(iterable, f = (done, iterable) => {}) =>
  new Iterable(function * () {
    f(yield * iterable, iterable)
  })

export default infix(guardIterable(onComplete))
