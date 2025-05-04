function TreeNode(val: number, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

function buildTree(preorder: number[], inorder: number[]) {
  if (!preorder.length || !inorder.length) return null

  // 前序遍历第一个节点是头节点
  const rootVal = preorder[0]
  const root = new TreeNode(rootVal)
  // 在中序遍历中找到头节点出现的索引
  const mid = inorder.indexOf(rootVal)

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

  return root
}

function buildTreeNew(preorder: number[], inorder: number[]): TreeNode | null {
  const inMap = new Map<number, number>()
  inorder.forEach((val, idx) => inMap.set(val, idx))

  let preIndex = 0

  function helper(left: number, right: number): TreeNode | null {
    if (left > right) return null

    const rootVal = preorder[preIndex++]
    const root = new TreeNode(rootVal)
    const index = inMap.get(rootVal)!

    root.left = helper(left, index - 1)
    root.right = helper(index + 1, right)

    return root
  }

  return helper(0, inorder.length - 1)
}

console.log(buildTree(preorder, inorder));