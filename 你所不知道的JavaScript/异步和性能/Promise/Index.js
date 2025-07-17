// const p = Promise.resolve();
//
// p.then(function () {
//   p.then(function () {
//     console.log("C");
//   });
//   console.log("A");
// });
// p.then(function () {
//   console.log("B");
// });
// A B C

var p3 = new Promise(function (resolve, reject) {
  resolve("B");
});

var p1 = new Promise(function (resolve, reject) {
  resolve(p3);
});

var p2 = new Promise(function (resolve, reject) {
  resolve("A");
});

p1.then(function (v) {
  console.log(v);
});

p2.then(function (v) {
  console.log(v);
});

// A B    <-- 而不是像你可能认为的B A