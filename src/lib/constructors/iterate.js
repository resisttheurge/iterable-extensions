import Iterable from 'Iterable'

export default
  (init, {
    next = (state) => state,
    until = (state) => false,
    project = (state) => state
  }) =>
    new Iterable(function * () {
      for (let state = init; !until(state); next(state)) {
        yield project(state)
      }
    })
