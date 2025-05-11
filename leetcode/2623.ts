type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
  let cache = new Map<string, any>()

  return function (...args: any[]) {
    let key = JSON.stringify(args)
    if (!cache.has(key)) {
      cache.set(key, fn(...args))
    }
    return cache.get(key)
  }
}

const sum = (a: number, b: number) => {
  console.log('执行了', a, b)
  return a + b
}

// function factorial(n: number){
//   if(n <= 1) return 1
//   return factorial(n - 1) * n
// }

const factorial = (n) => {
  return (n <= 1) ? 1 : (n * factorial(n - 1));
}