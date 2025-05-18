var foo = {
  something: function(){
    console.log('Tell me something good...')
  }
}

var bar = Object.create(foo)
bar.something()

// es5 之前

if(!Object.create){
  Object.create = function(o){
    function F(){}
    F.prototype = o
    return new F()
  }
}

var anotherObject = {
  a: 2
}

var myObject = Object.create(anotherObject, {
  b: {
    enumerable: false,
    writable: true,
    configurable: false,
    value: 3
  },
  c: {
    enumerable: true,
    writable: false,
    configurable: false,
    value: 4
  }
})

console.log(myObject.hasOwnProperty('a'))
console.log(myObject.hasOwnProperty('b'))
console.log(myObject.hasOwnProperty('c'))

console.log(myObject.a)
console.log(myObject.b)
console.log(myObject.c)
