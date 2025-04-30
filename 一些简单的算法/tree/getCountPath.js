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

function getCountPath(root, target) {
    const res = []

    function dfs(node, path, pathSum){
        if(!node) return

        const newSum = pathSum + node.val
        path.push(node.val)

        if((!node.children || node.children.length === 0) && newSum === target){
            res.push([...path])
        }

        for (const child of node.children || []) {
            dfs(child, path, newSum)
        }
        path.pop()
    }

    dfs(root, [], 0)
    return res
}

const tree1 = {
    val: 1,
    children: [
        { val: -1, children: [] },
        {
            val: 2,
            children: [
                { val: 3, children: [] },
                { val: 4, children: [{ val: -2, children: [] }] },
                { val: 1, children: [] }
            ]
        }
    ]
};

function getPath(root, target) {
    const res = []
    function dfsFromNode(node, path, sum) {
        if (!node) return;

        path.push(node.val);

        if (node.val === sum) {
            res.push([...path])
        }

        for (const child of node.children || []) {
            dfsFromNode(child, path,sum - node.val);
        }
        path.pop()
    }

    function traverse(node) {
        if (!node) return;

        dfsFromNode(node,[], target); // 从当前节点出发，查找路径
        for (const child of node.children || []) {
            traverse(child); // 继续尝试以子节点为起点
        }
    }

    traverse(root);
    return res;
}

console.log(getPath(tree1, 3))