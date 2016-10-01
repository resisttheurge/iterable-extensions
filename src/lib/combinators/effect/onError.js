import Iterable from 'Iterable'

export const onError =
  (iterable, f = (err, last, iterable) => { throw err }) =>
    new Iterable(function * () {
      let last
      try {
        for (last of iterable) {
          yield last
        }
      } catch (err) {
        f(err, last, iterable)
      }
    })

export default onError
