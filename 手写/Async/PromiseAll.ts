function myPromiseAll<T>(promises: Array<Promise<T>>): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const result: T[] = [];
    let resolvedCount = 0;

    promises.forEach((pr, index)=>{
      pr.then(value => {
        result[index] = value
        resolvedCount++

        if(resolvedCount === promises.length) {
          resolve(result)
        }
      }).catch(reject)
    })
  });
}
