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
y llama con [ { x: number }, { y: string } ].
```

---

### 14. Exigir propiedades inyectadas
📚 **Qué aprendes:** Combinar un relleno con propiedades adicionales exigidas.

🎯 **Reto:**
Extiende `base` para exigir todas las props de la intersección de tipos en `relleno`.
Debe fallar si falta alguna propiedad.

---

### 15. Inferencia automática de tipos
📚 **Qué aprendes:** Hacer que TypeScript infiera todo solo.

🎯 **Reto:**
Llama a `base({ relleno: [...] as const, x: ..., y: ... })` sin anotar tipos explícitos.
Confirma que TS entiende todo.

---

### 16. Múltiples inyecciones
📚 **Qué aprendes:** Componer varios tipos inyectados.

🎯 **Reto:**
Crea interfaces `A`, `B`, `C` y llama a `base` con sus instancias.
Debe pedir todas las props.

---

### 17. Tipo de retorno enriquecido
📚 **Qué aprendes:** Retornar un objeto tipado basado en tipos inyectados.

🎯 **Reto:**
Haz que `base` devuelva un objeto con todas las propiedades inferidas y tipadas.

---

### 18. Plugins tipados
📚 **Qué aprendes:** Inyectar tipos opcionales (como `__config`) en plugins.

🎯 **Reto:**
Simula `VectyPlugin<Config>` con un `applyPlugin` que devuelva el tipo de `__config`.

---

### 19. Validación condicional de tipos
📚 **Qué aprendes:** Aplicar restricciones personalizadas sobre los tipos inyectados.

🎯 **Reto:**
Haz que `relleno` solo permita objetos que tengan un `name: string`.

---

### 20. Factory de Componentes Genéricos
📚 **Qué aprendes:** Inyectar propiedades dinámicamente en componentes.

🎯 **Reto:**
Crea `createComponent<Inj extends object[]>(config: { relleno: [...Inj] })` que devuelva un componente que requiera todas las props.

---

## 💼 Manos a la obra (Nivel intermedio – hasta ejercicio 10)

---

### 1) Tipar respuestas de un formulario dinámico

A) En una empresa se encontró este patrón al procesar formularios con campos dinámicos:

```ts
function getFormValue(field: string): any {
  // ...
}
```

¿Cómo podrían usar TypeScript para recibir siempre el tipo correcto del campo, por ejemplo `"email"` devuelve `string`, `"age"` devuelve `number`?

---

### 2) Serializar objetos con solo ciertas claves

A) Un equipo necesita una función `serialize(obj, keys)` que devuelva solo algunas claves de un objeto como string JSON.

```ts
serialize({ a: 1, b: 2, c: 3 }, ["a", "c"]) // '{"a":1,"c":3}'
```

¿Cómo podrías usar `keyof` y genéricos para que `keys` solo puedan ser claves reales del objeto?

---

### 3) Auto tipado de respuestas API

A) El backend devuelve una respuesta `status: 'ok' | 'error'`, con contenido distinto según el caso.

```ts
type APIResponse =
  | { status: 'ok'; data: string[] }
  | { status: 'error'; error: string };
```

¿Cómo podrías crear una función `handleResponse<T>()` que entienda automáticamente qué propiedades puede usar según `status`?

---

### 4) Mapeo de tipos para inputs HTML

A) Estás generando componentes de formulario automáticamente, pero cada tipo de `input` espera un tipo diferente.

```ts
type InputType = "text" | "number" | "date";

getDefaultValue("text") → ""
getDefaultValue("number") → 0
```

¿Cómo podrías usar `extends` o `conditional types` para que `getDefaultValue<T>()` devuelva el tipo adecuado?

---

### 5) Validar campos con constraints

A) Tenés una función para validar que un objeto tenga cierta estructura.

```ts
validateFields({ name: "Alex", age: 30 });
```

¿Cómo podrías forzar que el tipo de argumento tenga al menos un `name: string` usando `extends`?

---

### 6) Interfaz dinámica para configuración

A) Cada módulo puede tener distinta configuración:

```ts
type Config = { theme: string } | { debug: boolean };
```

Querés una función `loadConfig<T>()` que devuelva la config esperada según el módulo. ¿Cómo podrías inferir eso con genéricos y `infer`?

---

### 7) Transformar lista en union

A) Estás creando una función que recibe una lista de nombres de features habilitadas:

```ts
enableFeatures(["auth", "analytics"])
```

¿Cómo harías para que esos valores estén restringidos a un tipo `"auth" | "analytics" | "payments"` y que TypeScript lo entienda?

---

### 8) Tipar funciones de acceso a propiedades

A) Usás una función `getValue(obj, key)` para obtener propiedades dinámicamente.

```ts
getValue({ name: "Alex", age: 30 }, "age") → 30
```

¿Cómo usarías `keyof` y genéricos para que `key` sólo pueda ser una clave válida y el retorno tenga el tipo correcto?
