type Prop<T, K extends keyof T> = T[K]

type Persona = { nombre: string, edad: number }
type TipoNombre = Prop<Persona, "nombre">

const persona1: TipoNombre = 'Pedrito'

