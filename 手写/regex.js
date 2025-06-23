const str = '访问我们: https://example.com，或 http://test.com/path';

const regex = /https?:\/\/[^\s，]+/g

console.log(str.match(regex));

const dom = '<div><p>Hello</p><br/></div>'
const tagNames = [...dom.matchAll(/<\s*([a-zA-Z0-9]+)[^>]*>/g)].map(m => m[1])
console.log(tagNames);