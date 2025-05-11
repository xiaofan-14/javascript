interface Entry {
  value: number
  timeoutId: ReturnType<typeof setTimeout>
}

class TimeLimitedCache {
  private map = new Map<number, Entry>()

  set(key: number, value: number, duration: number): boolean {
    const hasKey = this.map.has(key)

    // 如果已有旧的定时器，清除它
    if (hasKey) {
      clearTimeout(this.map.get(key)!.timeoutId)
    }

    // 设置新的定时器
    const timeoutId = setTimeout(() => {
      this.map.delete(key)
    }, duration)

    // 存入值和定时器
    this.map.set(key, {value, timeoutId})

    return hasKey

  }

  get(key: number): number {
    return this.map.has(key) ? this.map.get(key)!.value : -1
  }

  count(): number {
    return this.map.size
  }
}

