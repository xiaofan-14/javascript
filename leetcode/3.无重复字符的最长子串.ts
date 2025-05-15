/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const cache = new Map<string, number>()
  let res = 0
  let j = 0
  for (let i = 0; i < s.length; i++) {
    if (cache.has(s[i])) {
      j = Math.max(j, cache.get(s[i])! + 1)
    }
    cache.set(s[i], i)
    res = Math.max(res, i - j + 1)
  }
  return res
};
// @lc code=end

