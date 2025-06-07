const NOOP = () => {}

function createCancelFn(fn) {
  let cancel = NOOP
  return {
    cancel: () => cancel(),
    run: (...args) => {
      return new Promise((resolve,reject)=>{
        cancel()
        cancel = ()=>(resolve = reject  = NOOP)
        fn(...args).then(
          res => resolve(res),
          err => reject(err)
        )
      })
    }
  }
}

function mockRequest(name, delay = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Done: ${name}`);
      resolve(name);
    }, delay);
  });
}

// 包装为可取消任务
const task = createCancelFn(mockRequest);

// 调用测试
task.run('task1').then(res => console.log('res1:', res));
setTimeout(() => {
  task.run('task2').then(res => console.log('res2:', res));
}, 300); // 在 300ms 后又调用了一次 run，会取消 task1

setTimeout(() => {
  task.run('task3').then(res => console.log('res3:', res));
}, 700); // 在 task2 执行期间再次调用，取消 task2

// 输出预计如下：
/*
Done: task1   // 会执行，但回调不会触发（被取消）
Done: task2   // 同理，不触发回调
Done: task3   // 正常执行
res3: task3   // 只有这个有输出
*/
