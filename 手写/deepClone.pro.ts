// @ts-ignore
function deepClone<T = any>(target: T, map = new WeakMap()): T {
  // 处理非对象 值类型
  if (typeof target !== 'object' || target === null) {
    return target
  }

  // 循环引用
  if (map.has(target)) {
    return map.get(target)
  }

  let clone: any

  // 内建类型 Date RegExp
  if (target instanceof Date) {
    return new Date(target.getTime()) as any
  }

  if (target instanceof RegExp) {
    return new RegExp(target.source, target.flags) as any
  }

  // 处理数组和普通对象
  clone = Array.isArray(target)
    ? []
    : {}

  map.set(target, clone)

  for (const key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      clone[key] = deepClone((target as any)[key], map)
    }
  }

  return clone
}

const sym = Symbol('id')
// @ts-ignore
const origin = {
  name: 'Flynn',
  date: new Date(),
  reg: /abc/gi,
  map: new Map([['a', { x: 1 }]]),
  set: new Set([{ y: 2 }]),
  [sym]: 'symbol-value',
  nested: {
    self: null
  }
}

// @ts-ignore
origin.nested.self = origin // 创建循环引用

const cloned = deepClone(origin)

console.log(cloned)
console.log(cloned !== origin)
// @ts-ignore
console.log(cloned.map !== origin.map)
console.log(cloned[sym] === origin[sym])
