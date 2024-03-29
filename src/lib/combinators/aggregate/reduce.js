import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
import Iterable from 'Iterable'

export const reduce = (iterable, combine, init) =>
  new Iterable(function * () {
    const iterator = iterable[Symbol.iterator]()

    let result =
      init === undefined
        ? iterator.next().value
        : init

    for (let elem of iterator) {
      result = combine(result, elem)
    }

    return result
  })

export default infix(guardIterable(reduce))
