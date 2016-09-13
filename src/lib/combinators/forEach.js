export const forEach = async (iterable, callback) => {
  for (let elem of iterable) {
    callback(elem)
  }
}

export default forEach
