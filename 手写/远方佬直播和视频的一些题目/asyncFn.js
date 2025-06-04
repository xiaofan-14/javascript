/**
 * 闭包 和 Promise
 * 函数调用间隔1s
 */

function createAsyncFn(fn) {
  let p = Promise.resolve()
  return (...args)=>{
    const _fn = fn.bind(this, ...args)
    return (p = p.then(_fn, _fn))
  }
}

const asyncFn = createAsyncFn(()=>{
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(1)
    }, 1000)
  })
})

console.time('第一次')
console.time('第二次')
console.time('第三次')
asyncFn().then(()=>{
  console.timeEnd('第一次')
})

asyncFn().then(()=>{
  console.timeEnd('第二次')
})

asyncFn().then(()=>{
  console.timeEnd('第三次')
})