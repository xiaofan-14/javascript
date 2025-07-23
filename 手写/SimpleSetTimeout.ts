function mySetTimeout(fn: () => void, delay: number): number {
  const timer = setInterval(() => {
    clearInterval(timer); // 清除定时器，确保只执行一次
    fn();
  }, delay);

  return timer;
}

function myClearTimeout(id: number) {
  clearInterval(id); // 使用 clearInterval 模拟 clearTimeout
}

const id = mySetTimeout(() => {
  console.log('Hi from mySetTimeout!');
}, 1000);

// myClearTimeout(id); // 如果你要清除它