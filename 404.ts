function findKthNumber(n: number, k: number): number {
    const res: number[] = []

    function dfs(m: number) {
        res.push(m)
        for(let i = 0; i <= 9; i++) {
            const next = m * 10 + i
            if(next > n) break
            dfs(next)
        }
    }

    for (let i = 1; i <= 9; i++) {
        if(i <= n) dfs(i)
    }
  console.log(res);
  
    return res[k-1]
};

console.log(findKthNumber(13, 2))
