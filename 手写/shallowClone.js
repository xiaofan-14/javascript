function shallowClone(obj){
  const wrapper = {}

  // 拷贝字符串键
  for (const key in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, key)) {
      wrapper[key] = obj[key]
    }
  }
  // 拷贝 Symbol 键
  const symbols = Object.getOwnPropertySymbols(obj)
  for (const key in symbols) {
    wrapper[key] = obj[key]
  }

  return wrapper
}
