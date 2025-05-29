/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let maxSum = nums[0]
  let currentSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i],  currentSum + nums[i])
    maxSum = Math.max(maxSum, currentSum)
  }
  
  return maxSum
};
// @lc code=end

const tests = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(tests));

