/**
 * 寄生继承
 */

/** 传统的Javascript 类 */
function Vehicle(){
  this.engines = 1
}

Vehicle.prototype.ignition = function(){
  console.log('Turning on my engines.');
}
Vehicle.prototype.drive = function(){
  this.ignition()
  console.log('Steering and moving forward!');
}

// 寄生类 Car
function Car(){
  // 首先，car 是一个Vehicle
  var car = new Vehicle()
  // 接着我们对car进行定制
  car.wheels = 4
  // 保存到Vehicle::drive()的特殊引用
  var vehDrive = car.drive
  // 重写Vehicle::drive()
  car.drive = function(){
    vehDrive.call(this)
    console.log('Rolling on all ' + this.wheels + ' wheels!');
  }
  return car
}

var myCar = Car()
myCar.drive()