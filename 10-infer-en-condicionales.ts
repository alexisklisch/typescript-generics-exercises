// El tipo ElementType tiene un genérico <T>
// Si el genérico extiende de un array...
// "extraigo" el tipo del tipo
// Si no extiende de un array, el tipo es el que se pasa
type ElementType<T> = T extends Array<infer U> ? U : T

const cosa: ElementType<string[]> = 'asd' // ✅ correcto porque es un Array<string> 
const cosa2: ElementType<Array<number>> = 2 // ✅ correcto porque es un Array<number> 
const cosa3: ElementType<(string|boolean)> = 'dsa' // ✅ correcto porque al no ser un array, devuelve los tipos iniciales
const cosa4: ElementType<(boolean|Date)[]> = 16 // ❌ incorrecto porque no es nu array de números

// Ejemplos de la vida real

// 1) Necesito sólamente 1 elemento del array
function getFirst<T>(arr: T): ElementType<T> {
  return arr[0]
}
getFirst([23, 43]) // ✅ correcto: devolverá un number

// 2) Mapeo de arrays en componentes
// extends determina el formato obligatorio de un valor
// "list" será un array de ese valor
function mapToIds<T extends { id: number }>(list: T[]): T['id'][] {
  type Item = ElementType<T[]>; // Item será T
  // suponé que T tiene propiedad id: number
  return list.map((item: Item) => item.id);
}
mapToIds([{id: 2}, {id: 32}]) // 💻 [2, 32]

// 3) Capturar parámetros de funciones
type FunctionParams<T> = T extends (...args: infer P) => any ? P : never
type Example = (a: string, b: number) => void;
type Params = FunctionParams<Example>; // 💻 [string, number]