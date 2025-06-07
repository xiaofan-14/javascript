# 类型

## ECMAScript语言类型包括Undefined、Null、Boolean、String、Number和Object。

## 内置类型
JavaScript有七种内置类型：
- 空值（null）
- 未定义（undefined）
- 布尔值（boolean）
- 数字（number）
- 字符串（string）
- 对象（object）
- 符号（symbol, ES6中新增）
- 除对象之外，其他统称为“基本类型”

> 可以用 `typeof` 运算符来查看值的类型，它返回的是类型的字符串值。

> 函数是“可调用对象”，它有一个内部属性[[Call]]，该属性使其可以被调用。数组也是`object`的子类型

### js中为什么 `typeof null === 'object'` 

> js中对象二进制中前三位都为0时会被判断为 `object`, `null` 的二进制全是0所以会返回 `object`

使用复合条件检查是否为 `null`

```js
let a
(!a && typeof a === 'object')
```

在对变量执行typeof操作时，得到的结果并不是该变量的类型，而是该变量持有的值的类型，因为JavaScript中的变量没有类型。

JavaScript中。undefined是值的一种(已声明未赋值)。undeclared则表示变量还没有被声明过。