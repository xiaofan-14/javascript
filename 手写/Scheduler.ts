type Task = {
  fn: () => void
  delay: number
  addedAt: number
}

class Scheduler {
  private tasks: Task[] = []
  private timerId: number | null = null

  add(fn: () => void, delay: number) {
    this.tasks.push({
      fn,
      delay,
      addedAt: Date.now()
    })
  }

  start(inerval = 10) {
    if(this.timerId !== null) return 

    this.timerId = setInterval(()=>{
      const now = Date.now()
      this.tasks = this.tasks.filter(task => {
        if(now - task.addedAt >= task.delay) {
          task.fn()
          return false
        }
        return true
      })
  
      if(this.tasks.length === 0 && this.timerId !== null) {
        clearInterval(this.timerId)
        this.timerId = null
      }

    }, inerval)
  }
}

const scheduler = new Scheduler()

scheduler.add(() => console.log('a'), 1000);
scheduler.add(() => console.log('b'), 2000);
scheduler.start();