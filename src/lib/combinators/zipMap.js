import { zip } from './zip'
import { map } from './map'

export const zipMap = (iterable, ...projections) =>
  zip(
    iterable,
    ...projections.map(
      (projection) =>
        map(iterable, projection)
    )
  )
