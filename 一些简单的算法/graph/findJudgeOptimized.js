function findJudge(n, trust) {
    // 创建一个数组来跟踪每个人的信任度（被信任数减去信任他人数）
    // 索引从 1 开始
    const trustScore = new Array(n + 1).fill(0)
    // 遍历所有信任关系
    for (const [a,b] of trust) {
        // a 信任别人，分数减 1
        trustScore[a]--
        // b 被别人信任，分数加 1
        trustScore[b]++
    }

    // 法官应该被所有其他人信任（n-1个人）且不信任任何人
    // 所以法官的信任度应该是 n-1
    for (let i = 1; i <= n; i++) {
        if (trustScore[i] === n - 1) {
            return i;
        }
    }

    return -1; // 没有找到符合条件的法官
}

// 测试用例
console.log("找到法官 n=2, trust=[[1,2]]:", findJudge(2, [[1, 2]])); // 应该输出: 2
console.log("找到法官 n=3, trust=[[1,3],[2,3]]:", findJudge(3, [[1, 3], [2, 3]])); // 应该输出: 3
console.log("找到法官 n=3, trust=[[1,3],[2,3],[3,1]]:", findJudge(3, [[1, 3], [2, 3], [3, 1]])); // 应该输出: -1
console.log("找到法官 n=3, trust=[[1,2],[2,3]]:", findJudge(3, [[1, 2], [2, 3]])); // 应该输出: -1
console.log("找到法官 n=1, trust=[]:", findJudge(1, [])); // 应该输出: 1