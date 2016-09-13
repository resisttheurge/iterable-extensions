import Iterable from 'Iterable'

import { filter } from './filter'
import { filterNot } from './filterNot'

export const partition = (iterable, predicate) =>
  new Iterable(function * () {
    yield filter(iterable, predicate)
    yield filterNot(iterable, predicate)
  })

export default partition
