// 方法一：递归
function fibRecursive(n) {
    // if (n <= 1) {
    //     return n;
    // }
    // return fibRecursive(n - 1) + fibRecursive(n - 2);
    if (n <= 1) return n
    return fibRecursive(n - 1) + fibRecursive(n - 2)
}

// 方法二：迭代
function fibIterative(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// 方法三：记忆化递归 (可选)
function fibMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

console.log(fibIterative(5)); // 5
console.log(fibRecursive(5)); // 5  (注意n稍大时性能差异)
console.log(fibMemo(5)); // 5