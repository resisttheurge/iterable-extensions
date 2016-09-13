import Iterable from 'Iterable'

export default (iterable, combine, init) =>
  new Iterable(function * () {
    let rolling = init
    let initWithNextElem = init === undefined
    for (let elem of iterable) {
      if (initWithNextElem) {
        initWithNextElem = false
        yield rolling = elem
      } else {
        yield rolling = combine(rolling, elem)
      }
    }
  })
