Object.defineProperty(Object.prototype, '__proto__', {
  get() {
    return Object.getPrototypeOf(this)
  },
  set(o){
    Object.setPrototypeOf(this, o)
    return o
  }
})