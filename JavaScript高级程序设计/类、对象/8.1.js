let book = {
  year_: 2017,
  edition: 1
}

Object.defineProperty(book, 'year', {
  get(){
    return this.year_
  },
  set(val){
    if(val > 2017){
      this.year_ = val
      this.edition += val - 2017
    }
  }
})

book.year = 2018
console.log(book.edition)