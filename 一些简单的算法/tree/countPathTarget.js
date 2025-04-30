const tree = {
    val: 1,
    children: [
        { val: 2, children: [] },
        {
            val: 3,
            children: [
                { val: 4, children: [] },
                { val: 5, children: [{ val: 1, children: [] }] }
            ]
        }
    ]
};

function countPathTarget(root, target) {
    let res = 0;

    function dfs(node, pathSum) {
        if (!node) return;

        const newSum = pathSum + node.val;
        // 如果是叶子节点，并且路径和等于目标值
        if ((!node.children || node.children.length === 0) && newSum === target) {
            res++;
        }

        for (const child of node.children || []) {
            dfs(child, newSum); // 传入累加后的值
        }
    }

    dfs(root, 0); // 初始 pathSum = 0
    return res;
}

console.log(countPathTarget(tree, 8));

