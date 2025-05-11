function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length

  let slow = 2

  for (let fast = 2; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast]
      slow++
    }
  }

  return slow
}


const nums = [1,1,1,2,2,2,3,3]
// 输出：5, nums = [1,1,2,2,3] [0,0,1,1,1,1,2,3,3]
const num2 = [1,1,1,2,2,3]

console.log(removeDuplicates(nums))
// console.log(removeDuplicates(num2))
console.log(nums)