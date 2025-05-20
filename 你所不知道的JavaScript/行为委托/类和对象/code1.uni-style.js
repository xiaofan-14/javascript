const Widget = {
  init(width, height) {
    this.width = width
    this.height = height
    this.$elem = null
  },
  insert($where) {
    if (this.$elem) {
      this.$elem.css({
        width: this.width + 'px',
        height: this.height + 'px'
      }).appendTo($where)
    }
  }
}

const Button = Object.create(Widget)
Button.setup = function(width, height, label) {
  // 委托调用
  this.init(width, height)
  this.label = label || "Default"
  this.$elem = $("<button>").text(this.label)
}
Button.build = function($where) {
  // 委托调用
  this.insert($where)
  this.$elem.click(this.onClick.bind(this))
}

Button.onClick = function(event) {
  console.log("Button: ", this.label + " clicked!")
}

$(document).ready(function() {
  let $body = $(document.body)
  let btn1 = Object.create(Button)
  btn1.setup(100, 50, "Button 1")
  let btn2 = Object.create(Button)
  btn2.setup(150, 50, "Button 2")
  btn1.build($body)
  btn2.build($body)
})
  