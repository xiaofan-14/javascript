/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let max = 0

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      max = Math.max(max, prices[j] - prices[i]);
    }
  }

  return max
}
// @lc code=end

