# 类型装换

将值从一种类型转换为另一种类型通常称为类型转换（type casting）​，这是显式的情况；隐式的情况称为强制类型转换（coercion）​。

类型转换发生在静态类型语言的编译阶段，而强制类型转换则发生在动态类型语言的运行时（runtime）​。

## 抽象值操作

### toString

基本类型值的字符串化规则为：null转换为"null",undefined转换为"undefined", true转换为"true"。数字的字符串化则遵循通用规则

JSON.stringify(..)在对象中遇到undefined、function和symbol时会自动将其忽略，在数组中则会返回null

> JSON.stringify() 并不是强制类型转换

1. 字符串、数字、布尔值和null的JSON.stringify(..)规则与ToString基本相同。
2. 如果传递给JSON.stringify(..)的对象中定义了toJSON()方法，那么该方法会在字符串化前调用，以便将对象转换为安全的JSON值。


### ToNumber

其中true转换为1, false转换为0。undefined转换为NaN,null转换为0。

### ToBoolean

假值

- undefined
- null
- false
- +0、-0和NaN
- ""

除了上述假值列表，其他都是真值，包括 [] 、{} 、function(){}

### 显式强制类型转换

在JavaScript开源社区中，一元运算+被普遍认为是显式强制类型转换

不建议对日期类型使用强制类型转换，应该使用Date.now()来获得当前的时间戳，使用newDate(..).getTime()来获得指定时间的时间戳。

### 隐式强制类型转换
