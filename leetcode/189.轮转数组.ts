/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const n = nums.length
  k %= n

  reverse(nums, 0, n - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, n - 1)

  function reverse(arr: number[], start: number, end: number){
    while(start < end){
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
};
// @lc code=end

const tests1 = [1, 2, 3, 4, 5, 6, 7]
const k = 3
rotate(tests1, k);
console.log(tests1);


