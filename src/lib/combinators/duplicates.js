import Iterable from 'Iterable'

import filter from './filter'

export default (iterable, key, toKey = (elem) => elem) =>
  new Iterable(function * () {
    const checker = new Set([key])
    yield * filter(
      iterable,
      (elem) => checker.has(toKey(elem))
    )
  })