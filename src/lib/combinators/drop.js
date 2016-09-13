import Iterable from 'Iterable'

import dropWhile from './dropWhile'

export default (iterable, count) =>
  new Iterable(function * () {
    let i = 0
    yield * dropWhile(
      iterable,
      () => i++ < count
    )
  })
