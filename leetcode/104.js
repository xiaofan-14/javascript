// 定义节点
function TreeNode(val, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

// 用例 1：空树
// 输出: 0
console.log(maxDepth(null));

// 用例 2：只有一个节点
// 输出: 1
console.log(maxDepth(new TreeNode(1)));

// 用例 3：左右对称
const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3))
// 输出: 2
console.log(maxDepth(tree));

// 用例 4：深度更深的情况
const deepTree = new TreeNode(1,
  new TreeNode(2, new TreeNode(4, new TreeNode(5))),
  new TreeNode(3)
)
// 输出: 4
console.log(maxDepth(deepTree));

function maxDepth(root){
  if(!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
