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

/**
 * 求树的最大深度
 * @param node
 * @returns {number}
 */
function maxDepth(node) {
    // 如果节点不存在
    if (!node) return 0
    // 如果只有一个节点
    if (!node.children || node.children.length === 0) return 1

    let max = 0
    for (const child of node.children) {
        max = Math.max(max, maxDepth(child))
    }
    // 当前层 + 最大子层
    return max + 1
}

// console.log(maxDepth(tree)); // 输出：4

function getLevelNodeCounts(root){
    if(!root) return []

    const res =  []
    const queue = [root]
    while(queue.length > 0){
        const levelSize = queue.length
        res.push(levelSize)

        for (let i = 0; i < levelSize; i++){
            const node = queue.shift()
            if(node.children && node.children.length > 0){
                queue.push(...node.children)
            }
        }
    }
    return res
}

console.log(getLevelNodeCounts(tree));
