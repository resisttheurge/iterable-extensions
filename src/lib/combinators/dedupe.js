import Iterable from 'Iterable'

export const dedupe = (iterable, project = elem => elem) =>
  new Iterable(function * () {
    let unique = new Set()
    for (let elem of iterable) {
      const projection = project(elem)
      if (!unique.has(projection)) {
        unique.add(projection)
        yield elem
      }
    }
  })

export default dedupe
