const tree = {
    val: 5,
    children: [
        {val: 3, children: []},
        {
            val: 4,
            children: [
                {val: 2, children: []},
                {val: 1, children: [{val: 6, children: []}]}
            ]
        }
    ]
}

const target = 10;


/**
 * 给定一棵多叉树和一个目标值 target，找出所有从根节点到任意节点的路径，使得路径上节点值的总和小于等于 target。
 * @param root
 * @param target
 */
function pathPruning(root, target) {
    const res = []

    function dfs(node, path, sum) {
        if (!node) return
        const newSum = node.val + sum
        // 剪枝
        if (newSum > target) return;

        path.push(node.val)
        res.push([...path])

        for (const child of node.children) {
            dfs(child, path, newSum)
        }
        path.pop()
    }

    dfs(root, [], 0)
    return res
}

console.log(pathPruning(tree, target));