type Prop<T, K extends keyof T> = T[K]

type Persona = { nombre: string, edad: number }
type TipoNombre = Prop<Persona, "edad">