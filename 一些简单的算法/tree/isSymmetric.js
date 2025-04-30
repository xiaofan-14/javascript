class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 对称树:    1
//             / \
//            2   2
//           / \ / \
//          3  4 4  3
let symmetric = new TreeNode(1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

// 不对称树:  1
//             / \
//            2   2
//             \   \
//              3   3
let asymmetricTree = new TreeNode(1,
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3))
);

function isSymmetric(root) {
    if (!root) return true
    function bfs(leftNode, rightNode){
        /*
        * 1. 判断两个节点是否为null 如果是 true
        * 2. 判断单个节点是否为null 如果是 false
        * 3. 判断两个节点值是否相同  相同  true
        * 递归比较 左子树的左子节点，右子树的右子节点 && 左子树的右子节点， 右子树的左子节点
        * */
        if(!leftNode && !rightNode) return true
        if(!leftNode || !rightNode) return false
        if(leftNode.val !== rightNode.val) return false
        return bfs(leftNode.left, rightNode.right) && bfs(leftNode.right, rightNode.left)
    }

    return bfs(root.left, root.right)
}

console.log(isSymmetric(symmetric))
console.log(isSymmetric(asymmetricTree))