import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
import Iterable from 'Iterable'

export const map = (iterable, project) =>
  new Iterable(function * () {
    for (let elem of iterable) {
      yield project(elem)
    }
  })

export default infix(guardIterable(map))
