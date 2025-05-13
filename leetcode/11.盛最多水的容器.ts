/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let max = 0
  let left = 0, right = height.length - 1;

  while (left < right) {
    // 计算高度
    const h = Math.min(height[left], height[right])
    // 计算宽度
    const w = right - left
    // 计算面积
    const area = h * w
    // 计算最大值
    max = Math.max(max, area)

    // 如果左侧较矮，移动左指针，否则移动右指针
    if(height[left] < height[right]){
      left++
    }else{
      right--
    }
  }

  return max
};
// @lc code=end

