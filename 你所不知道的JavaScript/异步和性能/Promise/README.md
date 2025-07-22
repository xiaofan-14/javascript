# Promise

### 未来值

Promise 是一种封装和组合未来值的易于复用的机制。

一种在异步任务中作为两个或更多步骤的流程控制机制，时序上的this-then-that

### promise 模式

#### `Promise.all` 

这个api方法接收一个数组，通常由promise实例组成。从Promise.all([ .. ])返回的主promise在且仅在所有的成员promise都完成后才会完成。如果这些promise中有任何一个被拒绝的话，主Promise.all([ .. ])promise就会立即被拒绝，并丢弃来自其他所有promise的全部结果。

#### `Promise.race`

与Promise.all([ .. ])类似，一旦有任何一个Promise决议为完成，Promise.race([ .. ])就会完成；一旦有任何一个Promise决议为拒绝，它就会拒绝

> .all 必须全部完成或失败  .race 一旦有一个完成或者失败就立刻返回

#### `.finally`

这个回调在Promise决议后总是会被调用，并且允许你执行任何必要的清理工作

- none([ .. ])这个模式类似于all([ .. ])，不过完成和拒绝的情况互换了。所有的Promise都要被拒绝，即拒绝转化为完成值，反之亦然。
- any([ .. ])这个模式与all([ .. ])类似，但是会忽略拒绝，所以只需要完成一个而不是全部。
- first([ .. ])这个模式类似于与any([ .. ])的竞争，即只要第一个Promise完成，它就会忽略后续的任何拒绝和完成。
- last([ .. ])这个模式类似于first([ .. ])，但却是只有最后一个完成胜出