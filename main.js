
Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : -1
};

const arr = [1, 2, 3]

var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined) {
        return false
    }

    if (typeof obj !== "object" && typeof obj !== "function") {
       return classFunction === Object.getPrototypeOf(obj).constructor
    } else {
        return obj instanceof classFunction
    }
};

class Animal {}; 
class Dog extends Animal {}; 

checkIfInstanceOf(new Dog(), Animal);

checkIfInstanceOf(new Date(), Date)

checkIfInstanceOf(5, Number)

checkIfInstanceOf(Date, Date)