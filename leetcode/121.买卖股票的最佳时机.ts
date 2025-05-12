/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let minPrice = Infinity
  let maxProfit = 0

  for (const price of prices) {
    if(price < minPrice){
      minPrice = price
    }else{
      maxProfit = Math.max(maxProfit, price - minPrice)
    }
  }
  
  return maxProfit;
}
// @lc code=end

