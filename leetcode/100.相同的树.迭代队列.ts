function isSameTreeQueue(p: TreeNode | null, q: TreeNode | null): boolean {
  const queue = [[p, q]]
  while (queue.length > 0) {
    const [node1, node2] = queue.shift()

    // 都为null时，跳过
    if (!node1 && !node2) continue
    // 任意一个为null 返回false
    if (!node1 || !node2) return false
    // 两个节点值不相同时
    if (node1.val !== node2.val) return false
    
    queue.push([node1.left, node2.left])
    queue.push([node1.right, node2.right])
  }
  return true
}