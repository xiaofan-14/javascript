/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  if(!head) return null
  let res:ListNode|null = null
  while(head){
    const temp = head
    head = head.next
    temp.next = res
    res = temp
  }
  return res
};
// @lc code=end

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

/**递归 */
// function reverseList(head: ListNode | null): ListNode | null {
//   // 递归终止条件：到达链表尾部
//   if (head === null || head.next === null) return head;

//   // 递归反转后面的链表
//   const newHead = reverseList(head.next);

//   // 让 head.next 指向自己，完成反转
//   head.next.next = head;
//   head.next = null; // 原来的 next 置空，避免成环

//   return newHead;
// }
