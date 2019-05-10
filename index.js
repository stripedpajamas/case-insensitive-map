function confirmStringKey (key) {
  if (typeof key !== 'string') {
    throw new Error('map keys must be strings')
  }
}

module.exports = class extends Map {
  constructor () {
    super()
  }
  set (key, val) {
    confirmStringKey(key)
    return super.set(key.toUpperCase(), val)
  }
  get (key) {
    confirmStringKey(key)
    return super.get(key.toUpperCase())
  }
  has (key) {
    confirmStringKey(key)
    return super.has(key.toUpperCase())
  }
  delete (key) {
    confirmStringKey(key)
    return super.delete(key.toUpperCase())
  }
}
