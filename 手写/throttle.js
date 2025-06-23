function throttle(fn, interval) {
  // 记录上一次的执行时间
  let lastTime = 0

  function _throttle() {
    // 获取当前事件的触发时间
    const nowTime = Date.now()

    // 使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长时间需要去触发函数
    const remainTime = interval - (nowTime - lastTime)

    if (remainTime <= 0) {
      // 执行回调函数
      fn()
      // 保留上次的触发时间
      lastTime = nowTime
    }
  }

  return _throttle
}

function leadingThrottle(fn, interval, options = {leading: true}) {
  let lastTime = 0
  const { leading } = options
  function _throttle(){
    const nowTime = Date.now()

    if(!leading && !lastTime)  lastTime = nowTime

    const remainTime = interval - (nowTime - lastTime)
    if(remainTime <= 0) {
      fn()
      lastTime = nowTime
    }
  }
  return _throttle
}

function trailingThrottle(fn, interval, options ={leading: true, trailing: false}){
  const { leading, trailing } = options

  let lastTime = 0, timer = null
  function _throttle(){
    const nowTime = Date.now()

    if(!lastTime && !leading) lastTime = nowTime

    const remainTime = interval - (nowTime - lastTime)
    if(remainTime <= 0) {
      if(timer){
        clearTimeout(timer)
        timer = null
      }
      fn()
      lastTime = nowTime
      return
    }

    if(trailing && !timer) {
      timer = setTimeout(()=>{
        timer = null
        lastTime = !leading ? 0 : Date.now()
        fn()
      }, remainTime)
    }
  }
  return _throttle
}

function promiseThrottle(fn, interval, options = {leading: true, trailing: false }){
  let lastTime = 0, timer = null
  const { leading, trailing, cb } = options
  function _throttle(...args){
    return new Promise((resolve, reject)=>{
      const nowTime = Date.now()
      if(!lastTime && !leading) lastTime = nowTime

      const remainTime = interval - (nowTime - lastTime)
      if(remainTime <= 0) {
        if(timer) {
          clearTimeout(timer)
          timer = null
        }

        resolve(fn.apply(this, args))
        lastTime = nowTime
        return
      }
      if(trailing && !timer) {
        timer = setTimeout(()=>{
          timer = null
          lastTime = !leading ? 0 : Date.now()
          resolve(fn.apply(this, args))
        }, remainTime)
      }
    })
  }

  _throttle.cancel = function(){
    if(timer) clearTimeout(timer)
    timer = null
    lastTime = 0
  }
  return _throttle
}