/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let insertPos = 0;

  // 第一遍：把非0元素移到前面
  for (const num of nums) {
    if(num !== 0){
      nums[insertPos++] = num
    }
  }
  // 第二遍：将剩下的位置补0
  while(insertPos < nums.length){
    nums[insertPos++] = 0
  }
};
// @lc code=end

// const test = [0,0,1]
// moveZeroes(test)
// console.log(test)
