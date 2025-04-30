class MyQueue {
    constructor() {
        this.inStack = []
        this.outStack = []
    }

    transfer(){
        while(this.inStack.length > 0){
            this.outStack.push(this.inStack.pop())
        }
    }

    push(val) {
        this.inStack.push(val)
    }

    pop() {
        if (this.outStack.length === 0) {
            this.transfer()
        }
        return this.outStack.pop()
    }

    peek() {
        if (this.outStack.length === 0) {
            this.transfer()
        }
        return this.outStack[this.outStack.length - 1]
    }

    empty() {
        return this.inStack.length === 0 && this.outStack.length === 0
    }
}

let myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (inStack: [1, 2])
console.log("用栈实现队列 peek:", myQueue.peek());   // return 1 (transfer happens: outStack: [2, 1])
console.log("用栈实现队列 pop:", myQueue.pop());    // return 1, queue is [2] (outStack: [2])
console.log("用栈实现队列 empty:", myQueue.empty()); // return false
console.log("用栈实现队列 pop:", myQueue.pop());    // return 2, queue is [] (outStack: [])
console.log("用栈实现队列 empty:", myQueue.empty()); // return true
