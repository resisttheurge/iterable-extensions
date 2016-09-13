import Iterable from 'Iterable'
import { duplicates } from './duplicates'

export const groupBy = (iterable, toKey) =>
  new Iterable(function * () {
    const keys = new Set()
    for (let elem of iterable) {
      const key = toKey(elem)
      if (!keys.has(key)) {
        keys.add(key)
        yield [key, duplicates(key, toKey)]
      }
    }
  })

export default groupBy
