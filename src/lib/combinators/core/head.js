import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
import { take } from './take'

export const head = (iterable) =>
  take(iterable, 1)

export default infix(guardIterable(head))
