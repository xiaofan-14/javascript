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