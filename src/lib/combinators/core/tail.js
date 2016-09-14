import { drop } from './drop'

export const tail = (iterable) =>
  drop(iterable, 1)

export default tail
