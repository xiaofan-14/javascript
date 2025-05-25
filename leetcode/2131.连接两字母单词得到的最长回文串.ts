/*
 * @lc app=leetcode.cn id=2131 lang=typescript
 *
 * [2131] 连接两字母单词得到的最长回文串
 */

// @lc code=start
function longestPalindrome(words: string[]): number {
  // 使用哈希表统计单词出现的次数
  const wrodCount = new Map<string, number>()
  for (const word of words) {
    wrodCount.set(word, (wrodCount.get(word) || 0) + 1)
  }
  // 处理互为逆的单词对
  let res = 0
  for (const [word, count] of wrodCount.entries()) {
    const reversed = word[1] + word[0]

    if (word !== reversed && wrodCount.has(reversed)) {
      const pairCount = Math.min(count, wrodCount.get(reversed))
      res += pairCount * 4 // 每对可以贡献 4 个长度
      // 已使用的数量减去
      wrodCount.set(word, wrodCount.get(word)! - pairCount)
      wrodCount.set(reversed, wrodCount.get(reversed)! - pairCount)
    }
  }
  // 处理自身就是回文的单词
  let hasMiddle = false
  for (const [word, count] of wrodCount.entries()) {
    if (word[0] === word[1]) {
      // 可以成对
      const pairCount = Math.floor(count / 2)
      res += pairCount * 4

      // 判断是否还有一个可以放中间
      if (count % 2 === 1) {
        hasMiddle = true
      }
    }
  }

  if(hasMiddle){
    res += 2
  }
  return res
};
// @lc code=end

