// 1) TupleToUnion<T>
type TupleToUnion<T extends any[]> = /* … */ ;

// 2) función user-defined type guard
function isInTupleUnion<T extends readonly any[]>(arr: T, v: any): v is TupleToUnion<T> {
  return arr.includes(v);
}

// 3) prueba:
const roles = ["admin", "user", "guest"] as const;
if (isInTupleUnion(roles, "admin")) {
  // aquí TS sabe que "admin" es "admin" | "user" | "guest"
  const r: typeof roles[number] = "admin";
}

/* Solución:

type TupleToUnion<T extends any[]> = T[number];

  – Indexando la tupla con `[number]` extraes la unión de sus elementos.  
  – El type guard `v is TupleToUnion<T>` asegura que tras la comprobación, TS reduzca el tipo de `v`.

*/
