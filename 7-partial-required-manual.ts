// Convierte todas las propiedadeos de un objeto en opcionales
type MyPartial<T> = {
    [P in keyof T]?: T[P]
}
// Convierte todas las propiedades de un objeto en requeridos
type MyRequired<T> = {
    [P in keyof T]-?: T[P]
}

interface Person {
    name: string
    age: number
    isArgentinian?: boolean
}

const persona4: MyPartial<Person> = {
} // Como son opcionales, puede ir vacío

const persona5: MyRequired<Person> = {
    name: 'Flfl',
    age: 29,
    isArgentinian: true
} // Como son obligatorias, debe completarse todo
