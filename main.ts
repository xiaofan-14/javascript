// 1
function createCounter() {
  let count: number = 0
  function counter() {
    return count++
  }

  return counter
}

const counter = createCounter()

console.log(counter());
console.log(counter());

// 2
function Parent() {
  function whoAmI() {
    console.log('i am parent');
  }
}

function Child(){

}

Child.prototype = Object.create(Parent)
const child = Object.create(Child)

console.log(child.whoAmI);

// 3
function debounce(fn, delay){
  let timer
  return function(...args){
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(args)
    }, delay);
  }
}
// 4 节流函数我不太了解，你可以告诉我吗

// 5 我可能会调用数组api 或者 google，因为我不太了解如何将一个多维数组扁平化，教我一下吧

