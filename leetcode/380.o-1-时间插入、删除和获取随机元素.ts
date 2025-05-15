/*
 * @lc app=leetcode.cn id=380 lang=typescript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
class RandomizedSet {
  s

  constructor() {
    this.s = new Map<number, number>()
  }

  insert(val: number): boolean {
    if (this.s.has(val))
      return false
    this.s.set(val, val)
    return true
  }

  remove(val: number): boolean {
    if (!this.s.has(val))
      return false
    this.s.delete(val)
    return true
  }

  getRandom(): number {
    const keys: number[] = Array.from(this.s.keys())
    const index = Math.floor((Math.random() * keys.length))
    return this.s.get(keys[index])
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

const set = new RandomizedSet();
// 向集合中插入 1 。返回 true 表示 1 被成功地插入。
// console.log(set.insert(1));
set.insert(1)

// 返回 false ，表示集合中不存在 2 。
set.remove(2);

// 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
set.insert(2);

// getRandom 应随机返回 1 或 2 。
console.log(set.getRandom());


// 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
set.remove(1);

// 2 已在集合中，所以返回 false 。
set.insert(2);

// 由于 2 是集合中唯一的数字，getRandom 总是返回 2
console.log(set.getRandom());

