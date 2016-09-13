export default ({ [Symbol.iterator]: iter }) =>
  iter !== undefined &&
    iter !== null &&
      typeof iter === 'function'
