const tree = {
    val: 'A',
    children: [
        {val: 'B', children: []},
        {
            val: 'C',
            children: [
                {val: 'D', children: []},
                {val: 'E', children: [{val: 'F', children: []}]}
            ]
        }
    ]
}

function getAllPath(tree) {
    // 返回的数组
    const res = []

    /**
     * 深度优先算法
     * @param node 节点
     * @param path 保存的路径
     */
    function dfs(node, path){
        // 如果当前节点不存在
        if(!node) return
        // 保存当前节点值
        path.push(node.val)
        // 如果是叶子节点
        // 子节点不存在或者子节点长度为0
        if(!node.children || node.children.length === 0){
            res.push([...path])
        }else{
            // 遍历子节点，递归深度优先搜索每个子节点
            for (const child of node.children) {
                dfs(child, path)
            }
        }
        // 回溯，移除节点
        path.pop()
    }
    dfs(tree, [])
    return res
}

console.log(getAllPath(tree))