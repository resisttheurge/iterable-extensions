import Iterable from 'Iterable'

import { takeWhile } from './takeWhile'

export const take = (iterable, count) =>
  new Iterable(function * () {
    let i = 0
    yield * takeWhile(
      iterable,
      () => i++ < count
    )
  })

export default take
