function myPromiseRace<T>(promises: Array<Promise<T>>): Promise<T> {
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      p.then(resolve).catch(reject)
    }
  })
}
