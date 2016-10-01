import guardIterable from 'checks/guardIterable'
import infix from 'bind-infix-proxy'

export const forEach = (iterable, callback) => {
  for (let elem of iterable) {
    callback(elem)
  }
}

export default infix(guardIterable(forEach))
