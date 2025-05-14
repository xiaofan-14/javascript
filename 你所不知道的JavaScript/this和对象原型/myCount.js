export default function useCount() {
  const obj = {}

  function createCount(key, value, { depth= false}) {
    if(typeof key !== 'string'){
      throw new Error('key must a string')
    }
    Object.defineProperty(obj, key, {
      value: depth ? Object.freeze(value) : value,
      writable: false,
      configurable: false,
      enumerable: true
    })
    return obj
  }

  return {
    createCount
  }
}