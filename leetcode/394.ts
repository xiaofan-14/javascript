const s: string = "3[a]2[bc]"
const s1: string = "3[a2[c]]"

function decodeString(s: string): string {
  const countStack = []
  const strStack = []
  let res = ''
  let num = 0

  for (const char of s) {
    if (/\d/.test(char)) {
      num = num * 10 + parseInt(char)
    } else if(char === '['){
      countStack.push(num)
      strStack.push(res)
      num = 0
      res = ''
    }else if(char === ']'){
      const preStr = strStack.pop()!
      const step = countStack.pop()!
      res = preStr + res.repeat(step)
    }else{
      res += char
    }
  }

  return res
}

console.log(decodeString(s));
console.log(decodeString(s1));
