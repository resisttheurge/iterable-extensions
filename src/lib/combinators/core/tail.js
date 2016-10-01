import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'
import { drop } from './drop'

export const tail = (iterable) =>
  drop(iterable, 1)

export default infix(guardIterable(tail))
