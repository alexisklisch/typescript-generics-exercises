function largo <T extends { length: number }> (x: T): number {
  return x.length
}

// Solo acepta valores que tengan un .length de tipo número
// strings, arrays, etc
console.log(largo('test'))
console.log(largo([1, 2, 3]))
console.log(largo(Date()))

// Esto da error
console.log(largo(23))