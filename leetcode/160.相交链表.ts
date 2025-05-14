/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let len1:number = 0, len2:number = 0
  let l1 = headA
  let l2 = headB
  while(l1){
    l1 = l1.next
    len1++
  }

  while(l2){
    l2 = l2.next
    len2++
  }

  let fast:ListNode | null = null
  let slow:ListNode | null = null
  let step = 0
  if(len1 < len2){
    step = len2 - len1
    fast = headB
    slow = headA
  }else{
    step = len1 - len2
    fast = headA
    slow = headB
  }

  for (let i = 0; i < step; i++) {
    fast = fast.next
  }

  while(fast && slow){
    if(fast === slow) return slow
    fast = fast.next
    slow = slow.next
  }

  return null
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

/** 双指针 */
// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//   let p1 = headA;
//   let p2 = headB;

//   while (p1 !== p2) {
//     p1 = p1 ? p1.next : headB;
//     p2 = p2 ? p2.next : headA;
//   }

//   return p1; // 交点或 null
// }
