function wrapArray<T>(x: T): T[] {
  return [x, x, x]
}

console.log(wrapArray(42))
console.log(wrapArray('Hola'))