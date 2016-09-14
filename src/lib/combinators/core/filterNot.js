import { filter } from './filter'

export const filterNot = (iterable, predicate) =>
  filter(iterable, elem => !predicate(elem))

export default filterNot
