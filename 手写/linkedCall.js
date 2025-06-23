class JqueryWrapper {
  constructor(elements) {
    this.elements = elements;
  }

  addClass(className){
    this.elements.forEach(el => el.classList.add(className))
    return this
  }
  removeClass(className){
    this.elements.forEach(el => el.classList.remove(className))
    return this
  }
  hide(className) {
    this.elements.forEach(el => el.style.display = 'none')
    return this
  }
  text(content) {
    if(content){
      this.elements.forEach(el => el.textContent = content)
      return this
    }
    return this.elements[0]?.textContent
  }
}

function $(target) {
  const elements = document.querySelector(target)
  return  new JqueryWrapper(elements)
}