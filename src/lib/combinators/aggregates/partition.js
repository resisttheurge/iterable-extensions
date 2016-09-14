import { reduce } from './reduce'

export const partition = (iterable, predicate) =>
  reduce(
    iterable,
    ([left, right], elem) =>
      predicate(elem)
        ? [[...left, elem], right]
        : [left, [...right, elem]],
    [[], []]
  )

export default partition
