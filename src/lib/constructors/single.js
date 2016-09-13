import Iterable from 'Iterable'

export default (elem) =>
  new Iterable(function * () {
    yield elem
  })
