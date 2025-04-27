class Stack <T> {
  array: T[] = []
  
  push (item: T) {
    this.array.push(item)
  }

  pop (): T | undefined {
    return this.array.pop()
  }
}

const clase = new Stack<string>

clase.push('aes')
clase.push('dsdads')
clase.pop()
console.log(clase.array)

const clase2 = new Stack<number>
clase2.push(43)
clase.pop()
clase.pop()
