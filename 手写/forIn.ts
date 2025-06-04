const arr = [1, 2, 3, 4]

// @ts-ignore
Array.prototype.myForIn = function<T>(this: T[], cb: (item: T, index?: number, arr: T[]) => void): void {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
}

// @ts-ignore
arr.myForIn((item, index, array) => {
  console.log(item, index, array);
});
