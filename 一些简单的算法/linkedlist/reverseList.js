class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, null)))

/**
 * 反转链表
 * @param head
 */
function reverseList(head) {
    let prev = null
    let current = head
    while (current) {
        const temp = current.next
        current.next = prev
        prev = current
        current = temp
    }
    return prev
}

console.log(reverseList(head))

const head2 = {val: 3, next: {val: 2, next: {val: 1, next: null}}}

function foo(head) {
    let prev = null
    let cur = head

    while (cur) {
        const temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
    return prev
}