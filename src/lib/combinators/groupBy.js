import { map } from './map'
import { dedupe } from './dedupe'
import { zipMap } from './zipMap'
import { duplicates } from './duplicates'

export const groupBy = (iterable, toKey) =>
  zipMap(
    dedupe(map(iterable, toKey)),
    (key) => duplicates(iterable, key, toKey)
  )

export default groupBy
