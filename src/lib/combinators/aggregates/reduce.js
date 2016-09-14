import { head } from './head'
import { tail } from './tail'
import { forEach } from './forEach'

export const reduce = (iterable, combine, init) => {
  let [result, _iterable] =
    init !== undefined
      ? [init, iterable]
      : [head(iterable), tail(iterable)]

  forEach(
    _iterable,
    (elem) =>
      result = combine(result, elem)
  )

  return result
}

export default reduce
