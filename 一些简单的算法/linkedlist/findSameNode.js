// 公共部分
const c1 = {val: 'c1', next: null};
const c2 = {val: 'c2', next: null};
const c3 = {val: 'c3', next: null};
c1.next = c2;
c2.next = c3;

// 链表A
const a1 = {val: 'a1', next: null};
const a2 = {val: 'a2', next: null};
a1.next = a2;
a2.next = c1; // a2 之后接 c1

// 链表B
const b1 = {val: 'b1', next: null};
const b2 = {val: 'b2', next: null};
const b3 = {val: 'b3', next: null};
b1.next = b2;
b2.next = b3;
b3.next = c1; // b3 之后接 c1

// 链表C
const cc1 = {val: 'c1', next: null};
const cc2 = {val: 'c2', next: null};
const cc3 = {val: 'c3', next: null};
cc1.next = cc2;
cc2.next = cc3;

// 链表D
const dd1 = {val: 'd1', next: null};
const dd2 = {val: 'd2', next: null};
dd1.next = dd2;

/**
 * 找出两个链表相同的节点
 * @param l1
 * @param l2
 * @returns {*}
 */
function findSameNode(l1, l2) {
    // 计算链表长度
    let link1 = l1
    let len1 = 0
    while (link1) {
        len1++
        link1 = link1.next
    }

    let link2 = l2
    let len2 = 0
    while (link2) {
        len2++
        link2 = link2.next
    }

    let m //快指针
    let n //慢指针
    let step
    if(len1 > len2){
        step = len1 - len2
        m = l1
        n = l2
    }else{
        step = len2 - len1
        m = l2
        n = l1
    }
    // 快指针先走 step 步
    for (let i = 0; i < step; i++) {
        m = m.next
    }
    while(m !== n) {
        if(!m || !n) return
        m = m.next
        n = n.next
    }
    return m
}

console.log(findSameNode(a1, b1));
console.log(findSameNode(cc1, dd1));
