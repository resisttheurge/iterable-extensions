import { take } from './take'

export const head = (iterable) => {
  const [result] = take(iterable, 1)
  return result
}

export default head
