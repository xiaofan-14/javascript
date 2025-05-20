function digitSum(num: number): number {
  let sum = 0
  while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return sum
}
function minSwaps(nums: number[]): number {
  const n = nums.length;
  // 构造一个 [{原值, 原下标， 数位和}]
  const arr = nums.map((val, index) => ({
    val,
    index: index,
    weight: digitSum(val)
  }))
  // 按照数位和升序排列
  const sorted = [...arr].sort((a, b) => {
    if (a.weight === b.weight) return a.index - b.index
    return a.weight - b.weight
  })
  // 构造一个数组：排序后元素原来的索引
  const pos = sorted.map(item => item.index)
  // 记录交换次数
  let visited = new Array(n).fill(false)
  let swaps = 0

  for (let i = 0; i < n; i++) {
    // 如果已经访问过或者已经在正确的位置上，跳过
    if (visited[i] || pos[i] === i) {
      continue
    }
    // 计算环的大小
    let cycleSize = 0
    let j = i
    while (!visited[j]) {
      visited[j] = true
      j = pos[j]
      cycleSize++
    }
    // 如果环的大小大于1，则需要交换 (cycleSize - 1) 次
    if (cycleSize > 1) {
      swaps += cycleSize - 1
    }
  }
  return swaps
}