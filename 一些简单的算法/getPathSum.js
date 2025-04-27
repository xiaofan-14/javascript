const tree = {
    val: 1,
    children: [
        { val: 2, children: [] },
        {
            val: 3,
            children: [
                { val: 4, children: [] },
                { val: 5, children: [] }
            ]
        }
    ]
}


function getPathSum(root) {
    let res = 0
    function dfs(node, current){
        if(!node) return
        current = current * 10 + node.val;

        if(!node.children || node.children.length === 0){
           res += current
        }
        for (const child of node.children) {
            dfs(child, current)
        }
    }
    dfs(root, 0)

    return res
}

console.log(getPathSum(tree));