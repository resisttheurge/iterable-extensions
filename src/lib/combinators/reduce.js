import { forEach } from './forEach'

export const reduce = (iterable, combine, init) => {
  let result = init
  let initWithNextElem = init === undefined
  forEach(iterable, (elem) => {
    if (initWithNextElem) {
      initWithNextElem = false
      result = elem
    } else {
      result = combine(result, elem)
    }
  })
  if (initWithNextElem && result === undefined) {
    throw new TypeError(`reduce must be called on a non-empty iterable when no initial value is provided`)
  }
  return result
}

export default reduce
