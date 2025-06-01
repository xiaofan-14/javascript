const arr = [1, 2, 3, 4]

Array.prototype.myForIn = function () {
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      console.log(this[key])
    }
  }
}

arr.myForIn((...args) => {
  console.log(args)
})