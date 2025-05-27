function deepClone(target: any, map = new WeakMap()) {
  // 原始值
  if(typeof target !== "object" || target === null) return target
  // 循环引用
  if(map.has(target)) return map.get(target)

  // 创建结果对象
  const result = Array.isArray(target) ? [] : {}

  map.set(target, result)

  for (const key in result) {
    if(Object.prototype.hasOwnProperty.call(target, key)){
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
  }
}

obj.self = obj // 模拟循环引用

const copy = deepClone(obj)

console.log(copy)
console.log(copy === obj) // false
console.log(copy.info === obj.info) // false
