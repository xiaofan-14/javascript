class CoolGuy {
  specialTrick = 'nothing'

  CoolGuy(trick) {
   this.specialTrick = trick
  }

  showOff() {
    console.log("Here's my trick: ", this.specialTrick)
  }
}

const c = new CoolGuy('xiao fan')
c.showOff()