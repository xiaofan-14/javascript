(() => {
  function add(a, b) {
    return a + b
  }

  function formatDate(date) {
    const _date = new Date(date)
    const yyyy = _date.getFullYear()
    const mm = String(_date.getMonth() + 1).padStart(2, '0')
    const dd = String(_date.getDate()).padStart(2, '0')
    return `${yyyy}-${mm}-${dd}`
  }
  window.utils =  {
    add,
    formatDate
  }
})