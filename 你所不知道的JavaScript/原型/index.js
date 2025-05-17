var anotherObject = {
  a: 2
}

var myObject = Object.create(anotherObject)

console.log(anotherObject.a);
console.log(myObject.a);

console.log(anotherObject.hasOwnProperty("a"));
console.log(myObject.hasOwnProperty('a'))

myObject.a++;

console.log(anotherObject.a);
console.log(myObject.a);

console.log(myObject.hasOwnProperty('a'))

console.log('------')

// function Foo(){
// }
//
// var a = new Foo()
//
// console.log(Object.getPrototypeOf(a) === Foo.prototype)
// console.log(Foo.prototype.constructor === Foo)
// console.log(a.constructor === Foo)

console.log('------')

function NothingSpecial() {
  console.log("Don't mind me! ");
}

var a = new NothingSpecial();
// "Don't mind me! "

console.log(a)

console.log('========')

function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
};

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}

// 我们创建了一个新的Bar.prototype对象并关联到Foo.prototype
Bar.prototype = Object.create(Foo.prototype);

// 注意！现在没有Bar.prototype.constructor了
// 如果你需要这个属性的话可能需要手动修复一下它

Bar.prototype.myLabel = function() {
  return this.label;
};

var a = new Bar("a", "obj a");

console.log(a.myName()); // "a"
console.log(a.myLabel()); // "obj a"