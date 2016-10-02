import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
import { reduce } from './reduce'

export const groupBy = (iterable, toKey) =>
  reduce(
    iterable,
    (map, elem) => {
      const key = toKey(elem)
      return map.has(key)
        ? map.set(key, [...map.get(key), elem])
        : map.set(key, [elem])
    },
    new Map()
  )

export default infix(guardIterable(groupBy))
