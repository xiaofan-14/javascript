/**
 * 02：数组中第一个只出现一次的元素
 * 题目描述：
 *     给定一个数组，找出第一个只出现一次的元素，如果没有，返回 null。
 * @param arr
 * @returns {*|null}
 */
function firstUnique(arr) {
    const countMap = new Map();

    // 第一次遍历：统计频次
    for (let num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // 第二次遍历：找第一个只出现一次的
    for (let num of arr) {
        if (countMap.get(num) === 1) {
            return num;
        }
    }

    return null;
}

const r1 = firstUnique([1, 2, 3, 2, 1, 4]) // 输出: 3
const r2 = firstUnique([1, 1, 1])          // 输出: null
console.log(r1, r2)

