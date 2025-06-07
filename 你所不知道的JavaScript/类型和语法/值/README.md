# 值

### 不是值的值 它们的名称既是类型也是值。
  1. undefined类型只有一个值，即undefined。
  2. null类型也只有一个值，即null。

- null指空值(empty value)。null指曾赋过值，但是目前没有值
- undefined指没有值(missing value)。undefined指从未赋值

按惯例我们用void 0来获得undefined（这主要源自C语言，当然使用void true或其他
void表达式也是可以的）。void 0、void 1和undefined之间并没有实质上的区别。

## 数组

数组也可以有字符串键值和属性，如果字符串键可以被转为10进制数字会被当作索引使用

类数字可以通过数组工具函数转为真正的数组(indexOf, concat, forEach, slice, Array.from)

> js中使用`delete`操作符删除数组元素时不会改变数组的长度

- 稀疏数组: `sparse array`，即含有空白或空缺单元的数组

## 字符串

javascript 中字符串不等于字符数组

```js
var a = "foo";
var b = ["f", "o", "o"];
```
字符串和数组的确很相似，它们都是类数组，都有length属性以及indexOf

> JavaScript中字符串是不可变的，而数组是可变的

## 数字

JavaScript只有一种数值类型：number(数字)

> JavaScript没有真正意义上的整数

    JavaScript中的“整数”就是没有小数的十进制数。所以42.0即等同于“整数”42。

### 不是数字的数字

> NaN是JavaScript中唯一一个不等于自身的值。

NaN意指“不是一个数字”（not a number），这个名字容易引起误会，后面将会提到。
将它理解为 `无效数值` `失败数值` 或者 `坏数值` 可能更准确些

```js
var a = 10 / 'foo' // NaN
typeof a === 'number' // true
```

NaN是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出数字类型中的错误情况，
即“执行数学运算没有成功，这是失败后返回的结果”。

## 值和引用

> 我们无法自行决定使用值复制还是引用复制，一切由值的类型来决定。

JavaScript对值和引用的赋值/传递在语法上没有区别，完全根据值的类型来决定

> 简单值（即标量基本类型值，scalar primitive）总是通过值复制的方式来赋值/传递，包括null、undefined、字符串、数字、布尔和ES6中的symbol。
 
> 复合值（compound value）——对象（包括数组和封装对象）和函数，则总是通过引用复制的方式来赋值/传递。