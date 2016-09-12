export class Iterable {
  static [Symbol.hasInstance] (instance) {
    return Iterable.isIterable(instance)
  }

  static isIterable (instance) {
    return instance[Symbol.iterator] !== undefined &&
      typeof instance[Symbol.iterator] === 'function'
  }

  static single (elem) {
    return new Iterable(function * () {
      yield elem
    })
  }

  static repeated (elem, count) {
    return new Iterable(function * () {
      for (let i = 0; i < count; i++) {
        yield elem
      }
    })
  }

  static infinite (elem) {
    return new Iterable(function * () {
      while (true) {
        yield elem
      }
    })
  }

  static iterate (elem, next, until = () => false) {
    return new Iterable(function * () {
      let current = elem
      while (!until(current)) {
        yield current
        current = next(current)
      }
    })
  }

  constructor (generatorFunction = function * () {}) {
    this[Symbol.iterator] = generatorFunction
  }
}
