var a = {
  a: 42,
  b: '43',
  c: [41, 20]
}

console.log(JSON.stringify(a, ['a', 'c']));
console.log('-------');
console.log(JSON.stringify(a, function (k, v) {
  if (k !== 'a') return v
}, 2));


var a1 = new Boolean(false)
var b1 = new Number(0)
var c1 = new String('')

console.log(a1 && b1 && c1);
