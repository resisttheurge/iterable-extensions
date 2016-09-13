import Iterable from 'Iterable'

import { dropWhile } from './dropWhile'

export const drop = (iterable, count) =>
  new Iterable(function * () {
    let i = 0
    yield * dropWhile(
      iterable,
      () => i++ < count
    )
  })

export default drop
