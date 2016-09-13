export default async (iterable, callback) => {
  for (let elem of iterable) {
    callback(elem)
  }
}
