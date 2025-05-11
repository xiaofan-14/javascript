/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class Tree {
  val: number
  left: Tree | null
  right: Tree | null

  constructor(val?: number, left?: Tree | null, right?: Tree | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

// @ts-ignore
function pathSum(root: Tree | null, targetSum: number): number[][] {
  const ans = []
  const path = []

  function dfs(node, left){
    if(!node) return
    path.push(node.val)

    left -= node.val

    if(node.left === node.right && left === 0){
      ans.push([...path])
    }else{
      dfs(node.left, left)
      dfs(node.right, left)
    }
    path.pop()
  }

  dfs(root, targetSum)
  return ans
}

// 输入二叉树:
//      5
//     / \
//    4   8
//   /   / \
//  11  13  4
// /  \     / \
//7    2   5   1
// 目标和: 22

const tree = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7, left: null, right: null },
      right: { val: 2, left: null, right: null }
    },
    right: null
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: {
      val: 4,
      left: { val: 5, left: null, right: null },
      right: { val: 1, left: null, right: null }
    }
  }
}

console.log(pathSum(tree, 22))
// 输出: [[5, 4, 11, 2], [5, 8, 4, 5]]