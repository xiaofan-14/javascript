function generateMaze(rows = 21, cols = 21) {
  // 确保行列是奇数
  if (rows % 2 === 0) rows += 1;
  if (cols % 2 === 0) cols += 1;

  // 初始化全是墙
  const maze = Array.from({ length: rows }, () => Array(cols).fill(1));

  // 方向向量 [dx, dy]
  const dirs = [
    [0, -2], // 上
    [0, 2],  // 下
    [-2, 0], // 左
    [2, 0],  // 右
  ];

  function isInBounds(x, y) {
    return x > 0 && x < rows - 1 && y > 0 && y < cols - 1;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function carve(x, y) {
    maze[x][y] = 0; // 当前为通路

    for (const [dx, dy] of shuffle(dirs)) {
      const nx = x + dx;
      const ny = y + dy;
      const mx = x + dx / 2;
      const my = y + dy / 2;

      if (isInBounds(nx, ny) && maze[nx][ny] === 1) {
        maze[mx][my] = 0; // 打通墙体
        carve(nx, ny);    // 递归挖掘
      }
    }
  }

  // 从 (1,1) 开始挖
  carve(1, 1);

  // 设置入口出口
  maze[1][0] = 0;
  maze[rows - 2][cols - 1] = 0;

  return maze;
}

function solveMaze(maze) {
  const rows = maze.length;
  const cols = maze[0].length;

  const start = [1, 0];
  const end = [rows - 2, cols - 1];

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const queue = [[...start, [start]]]; // [x, y, path]
  visited[start[0]][start[1]] = true;

  const directions = [
    [0, 1],  // 右
    [1, 0],  // 下
    [0, -1], // 左
    [-1, 0], // 上
  ];

  while (queue.length > 0) {
    const [x, y, path] = queue.shift();

    if (x === end[0] && y === end[1]) {
      return path; // 找到终点，返回路径
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 && nx < rows &&
        ny >= 0 && ny < cols &&
        maze[nx][ny] === 0 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, [...path, [nx, ny]]]);
      }
    }
  }

  return null; // 无路径可达
}

const maze = generateMaze(21, 21);
console.log(maze.map(row => row.join(' ')).join('\n'));

const path = solveMaze(maze);
console.log('路径长度:', path?.length);
console.log('路径坐标:', path);