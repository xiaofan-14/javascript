function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  const stack: TreeNode[] = []
  let curr = root
  while(curr || stack.length) {
    while(curr){
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()!
    res.push(curr.val)
    curr = curr.right
  }
  return res
}