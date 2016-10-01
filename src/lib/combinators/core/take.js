import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
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

export default infix(guardIterable(take))
