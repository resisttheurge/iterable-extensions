import Iterable from 'Iterable'

export default (iterable, project) =>
  new Iterable(function * () {
    for (let elem of iterable) {
      yield project(elem)
    }
  })
