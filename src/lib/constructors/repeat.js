import empty from './empty'
import infinite from './infinite'
import single from './single'
import sized from './sized'

/**
 * An Iterable constructor for iterables which repeat a given element
 * infinitely or a specified number of times.
 * @param  {any} elem the element to repeat
 * @param  {number} [count=Infinity] the number of times to repeat the given
*                                    element
 * @return {Iterable} an Iterable which repeats the given element the specified
*                     number of times
 */
export default (elem, count = Infinity) =>
  count === Infinity
    ? infinite(elem)
    : count === 1
      ? single(elem)
      : count > 0
        ? sized(elem, count)
        : empty()
