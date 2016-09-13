import { map } from './map'
import { dedupe } from './dedupe'
import { duplicates } from './duplicates'

export const groupBy = (iterable, toKey) =>
  map(
    dedupe(map(iterable, toKey)),
    (key) => [key, duplicates(iterable, key, toKey)]
  )

export default groupBy
