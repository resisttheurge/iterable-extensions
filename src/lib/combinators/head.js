import take from './take'
import reduce from './reduce'

export default (iterable) =>
  reduce(
    take(iterable, 1),
    (elem) => elem
  )
