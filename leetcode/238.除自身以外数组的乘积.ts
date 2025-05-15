/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  
  // 结果数组，初始化为1
  const result = new Array(n).fill(1);
  
  // 计算左侧所有元素的乘积
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;  // 存储左侧所有元素的乘积
    leftProduct *= nums[i];   // 更新左侧乘积
  }
  
  // 计算右侧所有元素的乘积并与result相乘
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;  // 左侧乘积 * 右侧乘积
    rightProduct *= nums[i];    // 更新右侧乘积
  }
  
  return result;
}
// @lc code=end

// const nums = [1, 2, 3, 4]
// const nums = [-1, 1, 0, -3, 3]
const nums = [1,-1]
console.log(productExceptSelf(nums))
// 输出: [0,0,9,0,0]
// 输出: [24,12,8,6]