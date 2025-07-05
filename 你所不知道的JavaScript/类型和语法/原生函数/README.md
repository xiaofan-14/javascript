# 原生函数

常用的原生函数有：

- String()
- Number()
- Boolean()
- Array()
- Object()
- Function()
- RegExp()
- Date()
- Error()
- Symbol() ——ES6中新加入的！

实际上，它们就是内建函数。

> 原生函数可以被当作构造函数来使用

## 内部熟悉[[Class]]

所有 typeof 返回值为 `Object` 的对象都包含一个内部属性 `[[Class]]` 这个属性无法直接访问，一般通过 `Object.prototype.toString.call(...)` 来查看

> 多数情况下对象内部[[Class]]属性和创建改对象的内部构造函数相对应

对于 null 和 undefined，虽然它们不存在对于的原生构造函数，但内部[[Class]]还是 `Null` 和 `Undefined`

```js
Object.prototype.toString.call( null );
// "[object Null]"

Object.prototype.toString.call( undefined );
// "[object Undefined]"
```

其他基本类型通常返回对应的封装对象自动包装


## 封装对象包装

封装对象 (object wrapper) 由于基本类型没有 .length 和 .toString() 这样的属性和方法，需要通过封装对象才能访问，如果在一个基本类型上调用类似的属性和方法，此时JavaScript会自动为基本类型值包装一个封装对象

## 拆封

> 如果想得到封装对象中的基本数据类型值，可以使用 `valueOf()` 函数

## 原生函数作为构造函数

使用常量和使用构造函数创建对象的效果是一样的

> 尽量不适用原生函数作为 构造函数

### Array

使用 Array 构造函数创建数组时会出现意想不到的的效果，可能会创建出空数组

> 我们将包含至少一个 `空单元` 的数组称为 `稀疏数组`

## Date 和 Error

相较于其他原生构造函数，Date(..)和Error(..)的用处要大 很多，因为没有对应的常量形式来作为它们的替代。

## Symbol(..)