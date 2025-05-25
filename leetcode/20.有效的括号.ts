/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const stack = []
  const map = {
    ')':'(',
    '}':'{',
    ']':'[',
  }
  const prev = ['(','{','[']
  for (const char of s) {
    if(prev.includes(char)) {
      stack.push(char)
    } else {
      if(stack.pop() !== map[char]) return false
    }
  }
  return stack.length === 0
};
// @lc code=end
// "()[]{}"
