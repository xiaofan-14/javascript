// 反转字符串
const reverseString = (str) => [...str].reduce((acc, char) => char + acc, '')
