/**
 * 给定两个字符串 s 和 t，返回 s 中涵盖 t 所有字符的最小子串，如果不存在则返回空字符串。
 * @param s
 * @param t
 * @returns {string|*}
 */
function minWindow(s, t){
    debugger
    const need = {}, window ={}
    for(const c of t) need[c] = (need[c] || 0) + 1

    let left = 0, right = 0
    let valid = 0
    let start =0, minLen = Infinity
    while(right < s.length){
        const c = s[right]
        right++

        // 更新window
        if(need[c] !== undefined){
            window[c] = (window[c] || 0) + 1
            if(window[c] === need[c]) valid++
        }
        // 判断是否需要收缩窗口
        while(valid === Object.keys(need).length){
            if(right - left < minLen){
                start = left
                minLen = right - left
            }

            const d = s[left]
            left++
            if(need[d] !== undefined){
                if(window[d] === need[d]) valid--
                window[d]--
            }
        }
    }
    return minLen === Infinity ? '' : s.slice(start, start+minLen)
}

console.log(minWindow("ADOBECODEBANC", "ABC"))
// console.log(minWindow("AAABBBCCC", "ABC"))
