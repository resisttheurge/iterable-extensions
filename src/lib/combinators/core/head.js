import { take } from './take'

export const head = (iterable) =>
  take(iterable, 1)

export default head
