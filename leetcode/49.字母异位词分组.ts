/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 0) return [[""]]

  const cache = new Map<string, string[]>()

  for (const str of strs) {
    const temp = [...str].sort()
    const key = JSON.stringify(temp)
    if (cache.has(key)) {
      cache.set(key, [...cache.get(key), str])
    } else {
      cache.set(key, [str])
    }
  }
  let min = 0
  const res = []
  for (const value of cache.values()) {
    if(value.length > min){
      res.unshift(value.sort())
    }
  }
  return res
};
// @lc code=end

const test = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(test))