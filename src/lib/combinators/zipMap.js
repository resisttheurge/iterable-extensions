import { map } from './map'

export const zipMap = (iterable, ...projections) =>
  map(
    iterable,
    (elem) =>
      [elem, ...projections.map(fn => fn(elem))]
  )
