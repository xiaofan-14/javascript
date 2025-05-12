/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  const res: number[][] = Array.from({ length: n }, () => Array(n).fill(0))
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]
  let x = 0, y = 0, d = 0

  for (let i = 1; i <= n * n; i++) {
    res[x][y] = i
    const nx = x + dx[d], ny = y + dy[d]
    if (nx < 0 || nx >= n || ny < 0 || ny >= n || res[nx][ny] !== 0) {
      d = (d + 1) % 4
      x += dx[d]
      y += dy[d]
    } else {
      x = nx
      y = ny
    }
  }

  return res
}

// @lc code=end

