import Iterable from 'Iterable'

/**
 *
 * An Iterable constructor for Iterables of a specific size.
 * @param  {number} size the size of the returned iterable
 * @param  {any} elem the default element the iterable should yield
 * @return {Iterable} an Iterable with the given size which yields undefined or
 *                    the given element
 */
export default (size, elem) =>
  new Iterable(function * () {
    for (let i = 0; i < size; i++) {
      yield elem
    }
  })
