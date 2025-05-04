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
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
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
};