import forEach from './forEach'

export default async (iterable, combine, init) => {
  let result = init
  let initWithNextElem = init === undefined
  await forEach(iterable, (elem) => {
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
