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
};

/**
 * 获取最大深度
 * @param root
 * @returns {number}
 */
function getMaxDeep(root) {
    let max = 0
    function dfs(node, depth) {
        if (!node) return

        if (depth > max) {
            max = depth;
        }

        for (const child of node.children) {
            dfs(child, depth + 1)
        }
    }

    dfs(root, 1)
    return max
}

console.log(getMaxDeep(tree));