import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'

import { map } from './map'
import { flatten } from './flatten'

export const flatMap = (iterable, projection) =>
  flatten(map(iterable, projection))

export default flatMap
