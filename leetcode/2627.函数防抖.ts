/*
 * @lc app=leetcode.cn id=2627 lang=typescript
 *
 * [2627] 函数防抖
 */

// @lc code=start
type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {

  let timer: any = null
  let delay = 0
  return function (...args) {
    if (delay !== 0) {
      delay += t
      clearTimeout(timer)
    } else {
      delay = t
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, t);
  }
};
// @lc code=end

