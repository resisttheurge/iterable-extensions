import isIterable from './isIterable'

export const guardIterable =
  (f) =>
    new Proxy(f, {
      apply (target, thisArg, argumentsList) {
        if (isIterable(argumentsList[0])) {
          return thisArg::target(...argumentsList)
        } else {
          throw new TypeError(`Expected first argument of ${target.name} to be Iterable, was ${argumentsList[0]}`)
        }
      }
    })

export default guardIterable
