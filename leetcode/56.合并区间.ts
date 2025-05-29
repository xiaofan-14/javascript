/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  if (intervals.length < 1) return intervals

  intervals.sort((a, b) => a[0] - b[0])

  const res: number[][] = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const last = res[res.length - 1]
    const cur = intervals[i]

    if (cur[0] <= last[1]) {
      last[1] = Math.max(last[1], cur[1])
    } else {
      res.push(cur)
    }
  }

  return res
};
// @lc code=end


let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
console.log(merge(intervals));

