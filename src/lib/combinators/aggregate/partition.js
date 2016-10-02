import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
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

export default infix(guardIterable(partition))
