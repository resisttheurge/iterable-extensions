import { flatten } from './flatten'

export const concat = (...iterables) =>
  flatten(iterables)

export default concat
