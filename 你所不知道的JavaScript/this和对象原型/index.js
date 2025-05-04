function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: "Kyle"
};

var you = {
  name: "Reader"
};

// KYLE
console.log(identify.call(me));
// READER
console.log(identify.call(you));

speak.call(me); // Hello, 我是KYLE
speak.call(you); // Hello, 我是READER

function foo(num) {
  console.log("foo: " + num);

  // 记录foo被调用的次数
  this.count++;
}

foo.count = 0;

var i;
for (i=0; i<10; i++) {
  if (i > 5) {
    foo(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// foo被调用了多少次？
console.log(foo.count); // 0 -- 什么？！
console.log(count)

console.log(this)