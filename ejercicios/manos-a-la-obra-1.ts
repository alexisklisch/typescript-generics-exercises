// 1) define el tipo ElementType<T> usando conditional + infer

type ElementType<T> = boolean

// 2) implementa firstElement
function firstElement<T extends any[]>(arr: T): ElementType<T> | undefined {
  return arr[0];
}

// prueban:
const nums = [1, 2, 3];
const s = ["a", "b", "c"];
const n = firstElement(nums);
const t = firstElement(s);














/* Solución:

type ElementType<T> = T extends (infer U)[] ? U : never;

  – Con `T extends (infer U)[]` preguntamos “si T es un array de U, extrae U”.  
  – Así `firstElement([1,2,3])` devuelve `number | undefined`, y con `["a"]` devuelve `string | undefined`.

*/
