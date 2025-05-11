// @ts-ignore
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

// 输入
const root = {
  val: 10,
  left: {
    val: 5,
    left: {val: 3, left: {val: 3, left: null, right: null}, right: {val: -2, left: null, right: null}},
    right: {val: 2, left: null, right: {val: 1, left: null, right: null}}
  },
  right: {
    val: -3,
    left: null,
    right: {val: 11, left: null, right: null}
  }
} as TreeNode
const targetSum = 8;

// 预期输出
// 路径和等于 8 的有 3 条
// - 5 → 3
// - 5 → 2 → 1
// - -3 → 11
console.log(pathSum(root, targetSum)); // 3


function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;
  let res = 0;

  function dfs(node: TreeNode | null, sum: number): number {
    if (!node) return 0;
    let ret = 0;
    if (node.val === sum) ret++;
    ret += dfs(node.left, sum - node.val);
    ret += dfs(node.right, sum - node.val);
    return ret;
  }

  res += dfs(root, targetSum);
  res += pathSum(root.left, targetSum);
  res += pathSum(root.right, targetSum);

  return res;
}