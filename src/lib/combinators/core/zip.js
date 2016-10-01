import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
import Iterable from 'Iterable'
import iterate from 'constructors/iterate'

export const zip = (...iterables) =>
  new Iterable(function * () {
    const iterators = iterables.map(iterable => iterable[Symbol.iterator]())
    yield * iterate(
      iterators.map(iter => iter.next()),
      {
        next: () => iterators.map(iter => iter.next()),
        until: (state) => state.every(elem => elem.done),
        project: (state) => state.map(elem => elem.value)
      }
    )
  })

export default infix(guardIterable(zip))
