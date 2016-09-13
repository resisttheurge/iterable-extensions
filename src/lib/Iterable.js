import isIterable from 'checks/isIterable'

export default class Iterable {
  static [Symbol.hasInstance] (instance) {
    return Iterable.isIterable(instance)
  }

  static isIterable (instance) {
    return isIterable(instance)
  }

  constructor (generatorFunction = function * () {}) {
    this[Symbol.iterator] = generatorFunction
  }
}
