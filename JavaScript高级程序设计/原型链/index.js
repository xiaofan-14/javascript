/**
 * 构造函数也可以是函数表达式
 * 也可以是函数声明，因此两种方式都行
 * @example
 * function Person(){}
 * let Person = function(){}
 */
function Person(){}

/**
 * 声明之后，构造函数就有一个与之关联的原型
 */
console.log(typeof Person.prototype);
console.log(Person.prototype);

/**
 * 如前所述，构造函数有一个prototype属性，引用其原型对象，而这个原型对象也有一个constructor属性
 * 引用这个构造函数，换句话说两者循环引用
 */
console.log(Person.prototype.constructor === Person);

/**
 * 正常原型链都会终止于Object的原型对象 Object原型的原型是null
 */
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Person.prototype.__proto__.constructor === Object);
console.log(Person.prototype.__proto__.__proto__ === null);
console.log(Person.prototype.__proto__);

let person1 = new Person(), person2 = new Person();

/**
 * 构造函数、原型对象和实例 是3个完全不同的对象
 */
console.log(person1 !== Person);
console.log(person1 !== Person.prototype);
console.log(Person.prototype !== Person);

function debounce(fn, delay) {
    let timer = null
    return function(...args){
        // 清除之前的引用
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}


function Person() {}
const p = new Person()
console.log(p.__proto__ === Person.prototype)
console.log(Person.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)

