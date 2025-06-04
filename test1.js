const arr = [1, 2, 3, 4]

Array.prototype.myForIn = function () {
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      console.log(this[key])
    }
  }
}

arr.myForIn((...args) => {
  console.log(args)
})

// 实现一个简单的diff算法
function diff(oldData, newData) {
  const changes = [];

  // 如果两者都是数组
  if (Array.isArray(oldData) && Array.isArray(newData)) {
    // 检查旧数组中移除的元素
    oldData.forEach((item, index) => {
      if (!newData.includes(item)) {
        changes.push({ type: 'remove', index, value: item });
      }
    });

    // 检查新数组中新增的元素
    newData.forEach((item, index) => {
      if (!oldData.includes(item)) {
        changes.push({ type: 'add', index, value: item });
      }
    });

    // 对于位置变化的情况，上面的逻辑已经足够；但若想检测到“更新”的情况，
    // 需要额外逻辑，这里简化处理。
  } else if (typeof oldData === 'object' && typeof newData === 'object') {
    // 如果两者都是对象，遍历所有键
    const keys = new Set([...Object.keys(oldData), ...Object.keys(newData)]);
    keys.forEach(key => {
      if (oldData[key] !== newData[key]) {
        changes.push({
          type: 'change',
          key,
          oldValue: oldData[key],
          newValue: newData[key]
        });
      }
    });
  } else {
    // 如果不是相同类型，直接认为是替换
    if (oldData !== newData) {
      changes.push({ type: 'replace', oldValue: oldData, newValue: newData });
    }
  }

  return changes;
}

// 示例用法
const oldArray = [1, 2, 3];
const newArray = [2, 3, 4];
console.log(diff(oldArray, newArray));

const oldObj = { a: 1, b: 2 };
const newObj = { a: 1, c: 3 };
console.log(diff(oldObj, newObj));