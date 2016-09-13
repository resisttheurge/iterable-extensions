import Iterable from 'Iterable'

/**
 * The infinite iterable constructor.
 * @param  {any} elem the element to repeat infinitely
 * @return {Iterable} an Iterable which infinitely yields the given element
 */
export default (elem) =>
  new Iterable(function * () {
    while (true) {
      yield elem
    }
  })
