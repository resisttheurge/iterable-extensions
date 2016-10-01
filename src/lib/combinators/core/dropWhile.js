import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
import Iterable from 'Iterable'

export const dropWhile = (iterable, predicate) =>
  new Iterable(function * () {
    let checkPredicate = true
    for (let elem of iterable) {
      if (checkPredicate && (checkPredicate = predicate(elem))) {
        continue
      }
      yield elem
    }
  })

export default infix(guardIterable(dropWhile))
