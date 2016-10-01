import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'

import { filter } from './filter'

export const filterNot = (iterable, predicate) =>
  filter(iterable, elem => !predicate(elem))

export default infix(guardIterable(filterNot))
