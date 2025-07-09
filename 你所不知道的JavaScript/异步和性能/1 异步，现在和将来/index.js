let eventLoop = []

let event

eventLoop.push(() => {
  console.log('event loop')
})

setTimeout(() => {
  eventLoop.push(() => {
    console.log('test add')
  })
}, 1500)

setInterval(() => {
  if (eventLoop.length > 0) {
    event = eventLoop.shift()
    try {
      event()
    } catch (e) {
      reportError(err)
    }
  }
}, 100)
