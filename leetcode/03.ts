const str = 'abcabcbb'

function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>()
  let res = 0
  let j = 0
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      j = Math.max(j, map.get(s[i])! + 1)
    }
    map.set(s[i], i)
    res = Math.max(res, i - j + 1)
  }
  return res
}
console.log(lengthOfLongestSubstring(str))
