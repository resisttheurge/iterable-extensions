import Iterable from 'Iterable'
import error from 'constructors/error'

export const recoverWith =
  (iterable, f = (err, last, iterable) => error(err)) =>
    new Iterable(function * () {
      let last
      try {
        for (last of iterable) {
          yield last
        }
      } catch (err) {
        yield * f(err, last, iterable)
      }
    })

export default recoverWith
