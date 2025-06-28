function foo(fn) {
  const NOOP = () => { }

  let cancel = NOOP

  return {
    cancel: () => cancel(),
    run: (...args) => {
      return new Promise((resolve, reject) => {
        cancel()
        cancel = () => (resolve = reject = NOOP)
        fn(...args)
          .then(
            res => resolve(res),
            err => reject(err)
          )
      })
    }
  }
}

const runner = foo((name) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(name)
      resolve()
    }, 1500)
  })
})

runner.run('fn1')
runner.run('fn2')
