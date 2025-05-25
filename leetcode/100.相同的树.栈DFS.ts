function isSameTreeStack(p:TreeNode | null,q:TreeNode | null):boolean{
  const stack = [[p, q]]
  while(stack.length > 0) {
    const [node1, node2] = stack.pop()
    
    // 如果两个节点都为null 跳过
    if(!node1 && !node2) continue
    // 如果任意一个节点为null 返回 false
    if(!node1 || !node2) return false
    // 如果值不同返回 false
    if(node1.val !== node2.val) return false

    // 先右再左，保持和递归顺序一样，队列实现先左再右
    stack.push([node1.right, node2.right])
    stack.push([node1.left, node2.left])
  }
  return true
}