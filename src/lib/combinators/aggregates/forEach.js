export const forEach = (iterable, callback) => {
  for (let elem of iterable) {
    callback(elem)
  }
}

export default forEach
