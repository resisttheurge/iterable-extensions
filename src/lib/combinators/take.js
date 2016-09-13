import Iterable from 'Iterable'

import takeWhile from './takeWhile'

export default (iterable, count) =>
  new Iterable(function * () {
    let i = 0
    yield * takeWhile(
      iterable,
      () => i++ < count
    )
  })
