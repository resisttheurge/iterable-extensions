import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
import { reduce } from './reduce'

export const dedupe = (iterable) =>
  reduce(
    iterable,
    (unique, elem) =>
      unique.add(elem),
    new Set()
  )

export default infix(guardIterable(dedupe))
