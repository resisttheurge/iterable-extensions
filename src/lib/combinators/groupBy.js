import { map } from './core/map'
import { zipMap } from './core/zipMap'

import { dedupe } from './dedupe'
import { duplicates } from './duplicates'

export const groupBy = (iterable, toKey) =>
  zipMap(
    dedupe(map(iterable, toKey)),
    (key) => duplicates(iterable, key, toKey)
  )

export default groupBy
