// getKey 将 key 处理交给用户
// time 事件内不重复执行
// max 最大缓存数量

function memoize(fn, options) {
  const {
    getKey = (...args) =>  JSON.stringify(args),
    time = 0,
    max = 10
  } = options
  const cache = new Map()
  return function (...args) {
    const key = getKey(args)

    if (cache.has(key)) {
      const { timestamp, result } = cache.get(key)
      if(+new Date() - timestamp <= time) return result
      // return cache.get(key)
    }

    const res = fn.call(this, ...args)
    if(cache.has(key))
    cache.set(key, { timestamp: +new Date() , res })
    return res
  }
}

const fn = memoize((a, b) => {
  console.log('执行一次')
  return a + b
},{
  time: 1000,
  getKey(){}
});

console.log(fn(1, 2))
console.log(fn(1, 2))
console.log(fn(1, 4))

console.log(fn([1], [3]))
console.log(fn([1], [3]))

console.log(fn({ a: 1 }, {b: 12}))
console.log(fn({ a: 1 }, {b: 12}))