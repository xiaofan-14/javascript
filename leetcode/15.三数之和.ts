/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b); // O(nlogn)

  for (let i = 0; i < nums.length - 2; i++) {
    // 跳过重复值
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);

        // 跳过重复 left
        while (left < right && nums[left] === nums[left + 1]) left++;
        // 跳过重复 right
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
}

// @lc code=end

