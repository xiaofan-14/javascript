var strPrimitive = "I am a string";
console.log(typeof strPrimitive); // string
console.log(strPrimitive instanceof String); // false

var strObject = new String("I am a string");

console.log(typeof strObject); // object
console.log(strObject instanceof String); // true


// 检查sub-type对象 [object String]
console.log(Object.prototype.toString.call(strObject))

const name1 = Symbol("name");
const name2 = Symbol("name");

console.log(name1 === name2); // false
console.log(name1.toString()); // Symbol(name)
console.log(name2.toString()); // Symbol(name)

const arr = [1, 2, 3];
arr.baz = 'baz'
console.log(arr.baz);


const obj1 = {
  a: 2
}
console.log(obj1.a); // 2
delete obj1.a;
console.log(obj1.a); // undefined

const obj2 = {
  a: 3
}
console.log(obj2.a); // 3
Object.defineProperty(obj2, 'a', {
  value: 4,
  writable: true,
  enumerable: true,
  configurable: false
});
delete obj2.a;
console.log(obj2.a);
