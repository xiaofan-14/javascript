/*
 * @lc app=leetcode.cn id=516 lang=typescript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
function longestPalindromeSubseq(s: string): number {
  const map = new Map()
  for (const char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }
  return Math.max(...map.values())
};
// @lc code=end

