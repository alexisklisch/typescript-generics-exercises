// 1) crea un tipo KeysOfType<T, K> que seleccione las claves de T cuyo valor extienda K
type KeysOfType<T, K> = /* TU CÓDIGO AQUÍ */ ;

// 2) prueba con esta interfaz
interface Config {
  host: string;
  port: number;
  secure: boolean;
  path: string;
}

type StringKeys = KeysOfType<Config, string>; // debe ser "host" | "path"
type BooleanKeys = KeysOfType<Config, boolean>; // debe ser "secure"

/* Solución:

type KeysOfType<T, K> = { 
  [P in keyof T]: T[P] extends K ? P : never 
}[keyof T];

  – Recorremos cada P en T; si T[P] extiende K dejamos P, sino never.  
  – El índice final `[keyof T]` convierte el mapped a la unión de sus valores útiles.

*/
