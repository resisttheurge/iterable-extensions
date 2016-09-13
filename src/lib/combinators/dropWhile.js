import Iterable from 'Iterable'

export default (iterable, predicate) =>
  new Iterable(function * () {
    let checkPredicate = true
    for (let elem of iterable) {
      if (checkPredicate && (checkPredicate = predicate(elem))) {
        continue
      }
      yield elem
    }
  })
