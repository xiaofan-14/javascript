/**
 *  给定一个数组，请移除数组中的重复元素，使得每个元素只出现一次。请不要使用 Set 来完成。
 * @param arr
 * @returns {*[]}
 */
function uniqueArray(arr) {
    // 方法一：使用新数组和 indexOf/includes
    // 方法二：使用对象的 key 来判断唯一性
    // 方法三：先排序再比较相邻元素
    // 方法四：使用 filter
    // ... 选择一种或多种实现
    let result = [];
    // 你的代码...
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i]
        if(!result.includes(temp)){
            result.push(temp)
        }
    }

    return result;
}

function foo2(arr){
    const res = []
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i]
        // 如果不存在 temp 这个 key
        if(!obj[temp]){
            res.push(temp)
            obj[temp] = true
        }
    }
    return res
}

function foo3(arr){
    const res = []
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i]
        if(!map.has(temp)){
            res.push(temp)
            map.set(temp, true)
        }
    }
    return res
}

function uniqueArraySort(arr) {
    if (arr.length === 0) return [];

    let sortedArr = arr.slice().sort();
    let result = [sortedArr[0]];

    for (let i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[i - 1]) {
            result.push(sortedArr[i]);
        }
    }
    return result;
}

function foo4(arr){
    return arr.filter((item, index)=>{
        return arr.indexOf(item) === index
    })
}

function foo5(arr){
    return [...new Set(arr)]
}

// 输出: [ 1, 'a', 2, 'b', 3 ] (或类似)
console.log(uniqueArray([1, 'a', 2, 1, 'a', 'b', 3, 2]));
console.log(foo2([1, 'a', 2, 1, 'a', 'b', 3, 2]));
console.log(foo3([1, 'a', 2, 1, 'a', 'b', 3, 2]));
console.log(foo4([1, 'a', 2, 1, 'a', 'b', 3, 2]));
console.log(foo5([1, 'a', 2, 1, 'a', 'b', 3, 2]));