function baseDebounce(fn, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function invokeDebounce(fn, delay, immediate = false) {
  let timer = null, invoke = false

  return function (...args) {
    if (timer) clearTimeout(timer)
    if (immediate && !invoke) {
      fn.apply(this, args)
      // 置为 true 防止下一次直接触发
      invoke = true
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
        // 恢复初始化
        invoke = false
      }, delay)
    }
  }
}

function cancelDebounce(fn, delay, immediate = false) {
  let timer = null, invoke = false

  function _debounce(...args) {
    if (timer) clearTimeout(timer)
    if (immediate && !invoke) {
      fn.apply(this, args)
      invoke = true
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
        invoke = false
      }, delay)
    }
  }

  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    invoke = false
    timer = null
  }
  return _debounce
}

function promiseDebounce(fn, delay, immediate = false) {
  let timer = null, invoke = false

  function _debounce(...args) {
    return new Promise((resolve, reject) => {
      if (timer) clearTimeout(timer)
      if (immediate && !invoke) {
        resolve(fn.apply(this, args))
        invoke = true
      } else {
        timer = setTimeout(() => {
          resolve(fn.apply(this, args))
          invoke = false
        }, delay)
      }
    })
  }
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    invoke = false
    timer = null
  }
  return _debounce
}