import { take } from './take'

export const head = async (iterable) => {
  const [result] = take(iterable, 1)
  return result
}

export default head
