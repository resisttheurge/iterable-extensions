import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
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

export default infix(guardIterable(drop))
