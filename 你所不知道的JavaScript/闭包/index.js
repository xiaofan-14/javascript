var fn

function foo() {
    var a = 2

    function baz() {
        console.log(a)
    }

    fn = baz
}

function bar() {
    fn()
}

foo()
bar()

console.log('-------')

function wait(message) {
    setTimeout(function timer() {
        console.log(message)
    }, 1000)
}

wait('hello closure')


console.log('-------')

for (var i = 0; i <= 5; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(j, '=')
        }, j * 1000)
    })(i)
}

function coolModule() {
    var something = 'cool'
    var another = [1, 2, 3]

    function doSomething() {
        console.log(something)
    }

    function doAnother() {
        console.log(another.join('!'))
    }

    return {
        doSomething,
        doAnother
    }
}

/**
 * 简单的单例模式
 * @type {{doAnother: doAnother, doSomething: doSomething}}
 */
let temp = (
    function coolModule() {
        var something = 'cool'
        var another = [1, 2, 3]

        function doSomething() {
            console.log(something)
        }

        function doAnother() {
            console.log(another.join('!'))
        }

        return {
            doSomething,
            doAnother
        }
    }
)()

const {doSomething, doAnother} = coolModule()

doSomething()
doAnother()

temp.doSomething()

function coolModule2(id) {
    function identify() {
        console.log(id)
    }

    return {
        identify
    }
}

coolModule2('module 2').identify()
coolModule2('module 3').identify()

let changAPI = (function moduleTest(id) {
    const PUBLIC_API = {
        change,
        identify: identify1
    }

    function change() {
        PUBLIC_API.identify = identify2
    }

    function identify1() {
        console.log(id)
    }

    function identify2() {
        console.log(id.toUpperCase())
    }

    return PUBLIC_API
})('foo Module')

changAPI.identify()
changAPI.change()
changAPI.identify()

let myModule = (function Module() {
    let modules = {}

    function define(name, deps, impl) {
        for (let i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]]
        }
        modules[name] = impl.apply(impl, deps)
    }

    function get(name) {
        return modules[name]
    }

    return {
        define,
        get
    }
})()

myModule.define("bar",[],function(){
    function hello(who){
        return `Lets me say hi to ${who}`
    }
    return {
        hello
    }
})

myModule.define('foo',['bar'], function(bar){
    let hungry = 'hippo'
    function awesome(){
        console.log(bar.hello(hungry.toUpperCase()))
    }

    return {
        awesome
    }
})

let bar_ = myModule.get('bar')
let foo_ = myModule.get('foo')
console.log(bar_.hello('xiao fan'))
foo_.awesome()