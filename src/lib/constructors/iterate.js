import Iterable from 'Iterable'

export default
  (init, {
    next = (state) => state,
    until = (state) => false,
    project = (elem) => elem
  }) =>
    new Iterable(function * () {
      for (let elem = init; !until(elem); next(elem)) {
        yield project(elem)
      }
    })
