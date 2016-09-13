import filter from './filter'

export default (iterable, predicate) =>
  filter(iterable, elem => !predicate(elem))
