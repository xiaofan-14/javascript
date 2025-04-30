function firstUniqChar(str) {
    const map = new Map()

    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (!map.has(char)) {
            map.set(char, i)
        }else{
            map.delete(char)
        }
    }

    return Array.from(map.values())[0] ?? -1
}

console.log("第一个唯一字符 'leetcode':", firstUniqChar("leetcode"));       // 0
console.log("第一个唯一字符 'loveleetcode':", firstUniqChar("loveleetcode")); // 2
console.log("第一个唯一字符 'aabb':", firstUniqChar("aabb"));           // -1