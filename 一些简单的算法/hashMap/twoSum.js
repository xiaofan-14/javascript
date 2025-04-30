/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();

    // 计算处 target - 当前项的 差值，如果在map中存在，表示之前有这个项，返回之前存储的索引和当前索引
    for (let i = 0; i < nums.length; i++) {
        const differ = target - nums[i]
        if (map.has(differ)) {
            return [map.get(differ), i]
        }
        map.set(nums[i], i)
    }

    // 如果没有匹配项
    return [-1, -1];
}

// 测试用例
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // 输出: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // 输出: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // 输出: [0, 1]

const nums4 = [1, 3, 4, 2];
const target4 = 6;
console.log(twoSum(nums4, target4)); // 输出: [2, 3]