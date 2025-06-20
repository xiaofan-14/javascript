let eventLoop = []

let event

while(true) {
  if(eventLoop.length > 0){
    event = eventLoop.shift()
    try {
      event()
    } catch (e) {
      reportError(err)
    }
  }
}