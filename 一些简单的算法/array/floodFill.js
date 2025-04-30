const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]

function numIslands(grid) {
  if (!grid || grid.length === 0) return 0

  const rows = grid.length
  const cols = grid[0].length
  let count = 0

  function dfs(i, j) {
    // 越界 || 当前不是陆地
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] !== '1') return;

    // 标记为已访问
    grid[i][j] = '0';

    // 上下左右扩展
    dfs(i - 1, j); // 上
    dfs(i + 1, j); // 下
    dfs(i, j - 1); // 左
    dfs(i, j + 1); // 右
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
}

console.log(numIslands(grid));