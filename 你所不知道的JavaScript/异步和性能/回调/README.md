# 回调

回调是JavaScript中最基础的异步模式

## continuation 延续

回调函数包裹或者说封装了程序的延续（continuation）

控制反转（inversion of control），也就是把自己程序一部分的执行控制交给某个第三方

## 缺陷

回调函数会增加对代码维护的成本

回调最大的问题是控制反转，它会导致信任链的完全断裂。因为回调暗中把控制权交给第三方