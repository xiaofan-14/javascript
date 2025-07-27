function promiseRetry<T>(fn: () => Promise<T>, times: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const attempt = (retryLeft: number) => {
      fn()
        .then(resolve)
        .catch(err => {
          if (retryLeft === 0) {
            reject(err); // 最后一次失败
          } else {
            attempt(retryLeft - 1); // 递归重试
          }
        });
    };

    attempt(times);
  });
}


let count = 0;
promiseRetry(() => {
  count++;
  return count < 3 ? Promise.reject('fail') : Promise.resolve('success');
}, 5).then(console.log); // 最终输出 "success"

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

function promiseRetryWithDelay<T>(
  fn: () => Promise<T>,
  times: number,
  delay = 500
): Promise<T> {
  return new Promise((resolve, reject) => {
    const attempt = async (retryLeft: number) => {
      try {
        const res = await fn();
        resolve(res);
      } catch (err) {
        if (retryLeft === 0) {
          reject(err);
        } else {
          await sleep(delay);
          attempt(retryLeft - 1);
        }
      }
    };

    attempt(times);
  });
}
