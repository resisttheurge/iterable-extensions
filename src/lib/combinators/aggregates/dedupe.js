import { reduce } from './reduce'

export const dedupe = (iterable) =>
  reduce(
    iterable,
    (unique, elem) =>
      unique.add(elem),
    new Set()
  )

export default dedupe
