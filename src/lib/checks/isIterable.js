export const isIterable = ({ [Symbol.iterator]: iter }) =>
  iter !== undefined &&
    iter !== null &&
      typeof iter === 'function'

export default isIterable
