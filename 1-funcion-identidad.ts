function identidad<T> (x: T): T {
  return x
}

console.log(identidad(3))
console.log(identidad('tres'))
console.log(identidad({a: true}))