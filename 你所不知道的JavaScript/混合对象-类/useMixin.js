// 非常简单的mixin(..)例子：
function useMixin(){
  function mixin(sourceObj, TargetObj){
    for(let key in sourceObj){
      // 只会在不存在的情况下复制
      if(!(key in TargetObj)){
        TargetObj[key] = sourceObj[key]
      }
    }
    return TargetObj
  }
  return {
    mixin
  }
}

const arr = [1,2,3]

let Vehicle = {
  engines: 1,
  arr:arr,
  ignition: function () {
    console.log("Turning on my engine.");
  },

  drive: function () {
    this.ignition();
    console.log("Steering and moving forward! ");
  }
};

const { mixin } = useMixin()

let Car = mixin(Vehicle, {
  wheels: 4,
  drive: function () {
    Vehicle.drive.call(this);
    console.log(
      "Rolling on all " + this.wheels + " wheels! "
    );
  }
});

console.log(Car.arr)

Vehicle.arr.push(4)

console.log(Car.arr)
