/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>()

  for (const str of strs) {
    const count = Array(26).fill(0)
    for (const char of str) {
      count[char.charCodeAt(0) - 97]++
    }
    // 用分隔符避免混淆 ["1","11"] vs ["11","1"]
    const key = count.join("#")
    if (!map.has(key)) {
      map.set(key, [])
    }
    map.get(key)!.push(str)
  }
  return Array.from(map.values())
}

// @lc code=end

const test = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(test))