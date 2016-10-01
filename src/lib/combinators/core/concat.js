import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'

import { flatten } from './flatten'

export const concat = (...iterables) =>
  flatten(iterables)

export default infix(guardIterable(concat))
