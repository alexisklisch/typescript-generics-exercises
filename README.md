# TypeScript Generics & Injection Exercises

Bienvenido a esta serie de **20 ejercicios** para dominar **Genéricos** en TypeScript, con foco en **inyección de tipos**.  
Cada ejercicio tiene:
- 📚 Una breve **explicación** de lo que aprenderás.
- 🎯 Un **reto concreto** para aplicar el concepto.

---

## 📘 Recursos útiles

- [TypeScript - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

---

# 🏁 Nivel 1: Fundamentos básicos de Genéricos (1–5)

---

### 1. Función Identidad
📚 **Qué aprendes:** Primer contacto con genéricos: capturar y devolver el mismo tipo.

🎯 **Reto:**  
Escribe una función `identidad<T>(x: T): T`.  
Pruébala pasando un `number`, `string` y un objeto `{ a: boolean }`.

---

### 2. Array Genérico
📚 **Qué aprendes:** Cómo encapsular un valor en un array tipado dinámicamente.

🎯 **Reto:**  
Crea `wrapInArray<T>(x: T): T[]`.  
Pruébalo con `42` y `"hola"`.

---

### 3. Interfaz `Pair<T, U>`
📚 **Qué aprendes:** Genéricos con múltiples tipos.

🎯 **Reto:**  
Define `interface Pair<T, U> { first: T; second: U; }`.  
Crea un `Pair<number, string>` y un `Pair<boolean, Date>`.

---

### 4. Clase Genérica `Stack<T>`
📚 **Qué aprendes:** Aplicar genéricos a clases.

🎯 **Reto:**  
Implementa una clase `Stack<T>` con métodos `push(item: T)` y `pop(): T | undefined`.  
Úsala con `string` y `number`.

---

### 5. Restricciones con `extends`
📚 **Qué aprendes:** Limitar qué tipos son válidos para un genérico.

🎯 **Reto:**  
Haz `function largo<T extends { length: number }>(x: T): number;`  
Pásale un array, un string, y un objeto con `{ length: number }`.

---

# 🧩 Nivel 2: Genéricos avanzados y utilidades (6–10)

---

### 6. Keyof y Lookup
📚 **Qué aprendes:** Cómo acceder dinámicamente a propiedades de un tipo.

🎯 **Reto:**  
Define `type Prop<T, K extends keyof T> = T[K]`.  
Extrae el tipo de una propiedad de un objeto.

---

### 7. Partial y Required manual
📚 **Qué aprendes:** Mapped types básicos.

🎯 **Reto:**  
Recrea `Partial<T>` y `Required<T>`.  
Comprueba con una interfaz de ejemplo.

---

### 8. Omit y Pick manual
📚 **Qué aprendes:** Crear tipos seleccionando o excluyendo propiedades.

🎯 **Reto:**  
Implementa `Pick<T, K>` y `Omit<T, K>`.  
Usa un objeto `{ a:1, b:2, c:3 }` y omite `b`.

---

### 9. Conditional Types
📚 **Qué aprendes:** Tipos que dependen de una condición.

🎯 **Reto:**  
Crea `IsString<T>` que sea `true` si `T` es `string`, `false` si no.

---

### 10. Infer en Conditional Types
📚 **Qué aprendes:** Extraer tipos internamente.

🎯 **Reto:**  
Define `type ElementType<T> = T extends Array<infer U> ? U : T`.  
Testea con `number[]`, `string[][]` y `boolean`.

---

# 🚀 Nivel 3: Composición e Inyección de tipos (11–15)

---

### 11. Tuple to Union
📚 **Qué aprendes:** Cómo sacar la unión de tipos de un array/tupla.

🎯 **Reto:**  
Crea `type TupleToUnion<T extends any[]> = T[number]`.  
Comprueba que `[A, B]` se transforma en `A | B`.

---

### 12. Union to Intersection
📚 **Qué aprendes:** Técnica para convertir un `A | B` en `A & B`.

🎯 **Reto:**  
Implementa `UnionToIntersection<U>`.  
Comprueba que `A | B` se convierte en `A & B`.

---

### 13. Función base mínima
📚 **Qué aprendes:** Cómo capturar un array de objetos como tipo genérico.

🎯 **Reto:**  
Crea  
```ts
function base<T extends object[]>(config: { relleno: [...T] }): void;
