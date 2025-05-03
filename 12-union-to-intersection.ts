// UnionToIntersection toma una unión (A | B | C) y la convierte en una intersección (A & B & C)
type UnionToIntersection<U> = (
  U extends any
    // Para cada miembro de la unión, creamos una función con argumento del tipo U
    ? (x: U) => void
    : never
  // TypeScript colapsa la unión de funciones infiriendo el tipo común del argumento
) extends (x: infer I) => void
  ? I // I será la intersección de todos los tipos de argumento
  : never

interface A { a: number }
interface B { b: string }

// A | B significa: o tiene 'a' o tiene 'b', pero no necesariamente ambos
// UnionToIntersection lo convierte en A & B, es decir: necesita tener 'a' Y 'b'
type I = UnionToIntersection<A | B>

const test1: I = {
  a: 23,
  b: 'asda'
} // ✅ correcto: si faltara "a" o "b", TypeScript da error


// Ejemplo para inyección de plugins

interface Plugin1 { onInit: () => void }
interface Plugin2 { onDestroy: () => void }

type Plugins = Plugin1 | Plugin2

type Config = UnionToIntersection<Plugins>

const cfg: Config = {
  onDestroy: () => console.log('Destruido'),
  onInit: () => console.log('Iniciado')
}

export {}