/**
 * 判断一个字符串的括号是否匹配 栈的简单算法
 */
class Stack {
    arr

    constructor() {
        this.arr = []
    }

    isEmpty() {
        return this.arr.length <= 0
    }

    top() {
        return this.arr[this.arr.length - 1]
    }

    push(value) {
        this.arr.push(value)
    }

    pop() {
        if (!this.isEmpty()) {
            this.arr.pop()
        }
    }
}

/*
 // 简化版本
 const stack = []
 const map = {
     ')': '(', ']': '[', '}': '{'
 }

 for (let char of str) {
     if (['(', '[', '{'].includes(char)) {
         stack.push(char)
     } else {
         if (stack.pop() !== map[char]) return false
     }
 }

 return stack.length === 0*/

function isValid(str) {
    const stack = new Stack()
    for (const item of str) {
        if (item === '(' || item === '[' || item === '{') {
            stack.push(item)
        } else {
            if (isClose(stack.top(), item)) stack.pop()
        }
    }
    return stack.isEmpty()
}

function isClose(left, right) {
    if (left === '(' && right === ')') return true
    if (left === '[' && right === ']') return true
    return left === '{' && right === '}';
}

// console.log(isValid("()[]{}"))      // true
// console.log(isValid("([)]"))      // false
// console.log(isValid("{[()]}"))      // true
// console.log(isValid("(((()))"))     // false

function isValid2(s) {
    const stack = []
    const map = {
        '}':'{',
        ']':'[',
        ')':'(',
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if(char === '(' || char === '{' || char === '['){
             stack.push(char)
        } else if(char === ')' || char === '}' || char === ']'){
          if(stack.length === 0 || stack.pop() !== map[char]){
              return false
          }
        }
    }
    return stack.length === 0
}

console.log("有效的括号 '()[]{}': true ", isValid2("()[]{}"));  // true
console.log("有效的括号 '(]': false", isValid2("(]"));          // false
console.log("有效的括号 '{[]}': true ", isValid2("{[]}"));      // true
console.log("有效的括号 '': true", isValid2(""));              // true
console.log("有效的括号 '[': false", isValid2("["));            // false