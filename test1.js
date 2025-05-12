function moveZeroes(nums) {
  let left = 0, right = nums.length
  for (let i = 0; i < nums.length; i++) {
    if(nums[left] < nums[right]){
      const temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
    }
    left++;
    right--
  }
};
// @lc code=end

const test = [0,1,0,3,12]
moveZeroes(test)
console.log(test)