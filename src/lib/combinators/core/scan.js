import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
import Iterable from 'Iterable'

import { map } from './map'
import { head } from './head'
import { tail } from './tail'

export const scan = (iterable, combine, init) =>
  new Iterable(function * () {
    let rolling =
      init !== undefined
        ? combine(init, head(iterable))
        : head(iterable)

    yield rolling

    yield * map(
      tail(iterable),
      (elem) => rolling = combine(rolling, elem)
    )
  })

export default infix(guardIterable(scan))
