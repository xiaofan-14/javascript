const arr = [1,2]
const iterator = arr[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

var myObject = {
  a: 2,
  b: 3
};

Object.defineProperty(myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function() {
    var o = this;
    var idx = 0;
    var ks = Object.keys(o);
    return {
      next: function() {
        return {
          value: o[ks[idx++]],
          done: (idx > ks.length)
        };
      }
    };
  }
} );

// 手动遍历myObject
var it = myObject[Symbol.iterator]();
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { value:undefined, done:true }

// 用for..of遍历myObject
for (var v of myObject) {
  console.log(v);
}
// 2
// 3