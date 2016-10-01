import Iterable from 'Iterable'

export const error =
  (err) =>
    new Iterable(function * () {
      throw err
    })

export default error
