/*
 * @lc app=leetcode.cn id=2626 lang=typescript
 *
 * [2626] 数组归约运算
 */

// @lc code=start
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let res = init
  for (const num of nums) {
    res = fn(res, num)
  }
  return res
};
// @lc code=end

// const nums = [1,2,3,4]
// function sum(accum, curr) {
//   return accum + curr;
// }
// const init = 0

// console.log(reduce(nums,sum,init))