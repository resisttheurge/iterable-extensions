import Iterable from 'Iterable'
import iterate from 'constructors/iterate'

export default (...iterables) =>
  new Iterable(function * () {
    const iterators = iterables.map(iterable => iterable[Symbol.iterator]())
    yield * iterate(
      [0, iterators.map(iter => iter.next())],
      {
        next: ([i, state]) => [i + 1, iterators.map(iter => iter.next())],
        until: ([i, state]) => state.every(elem => elem.done),
        project: ([i, state]) => [i, ...state.map(elem => elem.value)]
      }
    )
  })
