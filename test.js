// 反转字符串
const reverseString = (str) => [...str].reduce((acc, char) => char + acc, '')


var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined || !(classFunction instanceof Function)) {
        return false
    }
    return Object(obj) instanceof classFunction;
};

console.log(checkIfInstanceOf(5, Object));