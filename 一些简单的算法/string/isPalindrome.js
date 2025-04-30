function isPalindrome(s) {
    // 1. 预处理字符串：转小写，移除标点和空格
    // 2. 使用双指针从两端向中间比较
    const str = s.toLowerCase().replace(/[^a-zA-Z]/g, '')

    // 方法 1
    // const str2 = str.split(' ')
    //     .reverse()
    //     .join('')
    // return str === str2

    // 只有一个字符时，返回 true，一个字符也是回文数
    if(str.length <= 1) return true

    // 方法 2
    // 指针1的起始位置
    let left = 0
    // 指针2的起始位置
    let right = str.length - 1

    while(left < right){
        if(str[left] !== str[right]){
            // 出现不匹配就不是回文数
            return false
        }
        left++
        right--
    }

    return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true