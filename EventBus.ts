interface Effect {
  fn: Function
  isOnce?: boolean
}

class EventBus {
  private cache: Map<string, Effect[]> = new Map()

  // on：监听某个事件。
  on(eventName: string, handler: Function) {
    const list = this.cache.get(eventName) || []
    list.push({fn: handler})
    this.cache.set(eventName, list)
  }

  // emit：触发某个事件，并传递参数。
  emit(eventName: string, ...args: any[]) {
    const handlers = this.cache.get(eventName)
    if (!handlers) return

    for (const effect of [...handlers]) {
      effect.fn(...args)
      if (effect.isOnce) this.off(eventName, effect.fn)
    }
  }

  // off：移除某个事件的某个处理函数。
  off(eventName: string, handler: Function) {
    const handlers = this.cache.get(eventName)
    if (!handlers) return

    const filtered = handlers.filter(e => e.fn !== handler)
    if(filtered.length > 0){
      this.cache.set(eventName, filtered)
    }else{
      this.cache.delete(eventName)
    }
  }

  // once：只监听一次，触发后即移除。
  once(eventName: string, handler: Function) {
    const list = this.cache.get(eventName) || []
    list.push({fn: handler, isOnce: true})
    this.cache.set(eventName, list)
  }
}

const bus = new EventBus()

function handler(msg: string) {
  console.log('handler:', msg)
}

bus.on('say', handler)
bus.once('say', msg => console.log('once:', msg))

bus.emit('say', 'hello')
bus.emit('say', 'world')

bus.off('say', handler)
bus.emit('say', 'bye') // 不再触发

