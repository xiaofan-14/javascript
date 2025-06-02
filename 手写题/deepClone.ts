// @ts-ignore
function deepClone(target: any, map = new WeakMap()) {
  // 值类型或者 null
  if (typeof target !== 'object' || target === null) return target

  // 循环依赖
  if (map.has(target))
    return map.get(target)

  // 处理返回值类型
  const result = Array.isArray(target) ? [] : {}
  map.set(target, result)

  for(const key in target){
    if(Object.prototype.hasOwnProperty.call(target, key)) {
      result[key] = deepClone(target[key], map)
    }
  }
  return result
}

const obj = {
  name: 'Flynn',
  info: {
    age: 21,
    hobbies: ['coding', 'reading']
  },
  self: {}
}

obj.self = obj // 模拟循环引用

const copy = deepClone(obj)

console.log(copy.self)
console.log(copy === obj) // false
console.log(copy.info === obj.info) // false
