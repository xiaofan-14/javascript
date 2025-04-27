const tree = {
    val: 5,
    children: [
        { val: 3, children: [] },
        {
            val: 4,
            children: [
                { val: 2, children: [] },
                { val: 1, children: [{ val: 6, children: [] }] }
            ]
        }
    ]
};

function getMaxPathSum(root) {
    const res = []
    function dfs(node, pathSum){
        if(!node) return
        const newSum = pathSum + node.val

        if(!node.children || node.children.length === 0){
            res.push(newSum)
        }

        for (const child of node.children) {
            dfs(child, newSum)
        }
    }
    dfs(root, 0)
    return Math.max(...res)
}

console.log(getMaxPathSum(tree))

