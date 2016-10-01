import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
import iterate from 'constructors/iterate'

import { map } from './map'
import { zip } from './zip'
import { zipShortest } from './zipShortest'

export const zipWithIndex = (...iterables) =>
  map(
    zipShortest(
      iterate(0, { next: i => i + 1 }),
      zip(...iterables)
    ),
    ([i, tuple]) => [i, ...tuple]
  )

export default infix(guardIterable(zipWithIndex))
