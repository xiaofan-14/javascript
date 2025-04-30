function flattenRecursive(arr) {
    return arr.reduce((acc, val) =>
        acc.concat(Array.isArray(val) ? flattenRecursive(val) : val), []
    )
}

// [ 1, 2, 3, 4, 5, 6 ]
console.log(flattenRecursive([1, [2, [3, 4], 5], 6]));