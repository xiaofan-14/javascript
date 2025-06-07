const str = '12321'

console.log(Array.prototype.join.call(str, '-'));

console.log(str.split('').reverse().join('-'));