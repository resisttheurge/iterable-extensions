import Iterable from 'Iterable'

export const onComplete =
(iterable, f = (done, iterable) => {}) =>
  new Iterable(function * () {
    f(yield * iterable, iterable)
  })

export default onComplete
