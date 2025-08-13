function run(gen) {
  let args = [].slice.call(arguments, 1)
  let it

  it = gen.apply(this, args)

  return Promise.resolve()
    .then(function handleNext(value) {
      let next = it.next(value)

      return (function handleResult(next) {
        if (next.done) {
          return next.value
        } else {
          return Promise.resolve(next.value)
            .then(handleNext, function handleError(err) {
              return Promise.resolve(it.thorw(err))
                .then(handleResult)
            })
        }
      })(next)
    })
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function* main(text) {
  console.log("开始", text)
  yield delay(1000)
  console.log("1 秒后")
  let value = yield Promise.resolve(42)
  console.log("拿到的值:", value)
  return "完成"
}

run(main, "Hello").then(result => {
  console.log("执行结果:", result)
})