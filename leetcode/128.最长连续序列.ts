/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let max = 0

  numSet.forEach(item => {
    if (numSet.has(item - 1)) {
      return
    }

    let y = item + 1
    while (numSet.has(y)) {
      y++
    }
    max = Math.max(max, y - item)
  })
  return max
};
// @lc code=end

// const test = [100, 4, 200, 1, 3, 2]
// console.log(longestConsecutive(test))
