// T -> object type inicial
// U extends keyof T -> Cualquiera de las keys de <T>
type MyPick <T, U extends keyof T> = {
    // <V> filtra sólo lo que está en U
    // Se usa "in" como cuando se recorre los valores de un objeto en JS
    [V in U]: T[V] // Devuelve los tipos de T, que se encuentran en V
}

type FullUser = {id: number, name: string, isValid: boolean, createAt: Date}

type User = MyPick<FullUser, 'name' | 'isValid'>

const user: User = {
    name: 'Pepe',
    isValid: false
}




/*
Omit es un poco más complejo.

La "trampa" es que "as" en realidad afecta sólo a P
Es como si sólamente estuviese hablando del item aislado
*/

// T -> {id: number, name: string, isValid: boolean, creatdeAt: Date}
// K -> "name" | "createdAt"
type MyOmit <T, K extends keyof T> = {
    // P -> Cada uno de los valores del objeto inicial
    // "as" afecta al valor sólo. Es decir a "id", "name", "isValid" o "createdAt"
    // Si P tiene un valor de los que pasó el usuario en <K>...
    // ...el valor será never (no se pasará ese tipo)
    // Si P no está entre los valores de K, ese tipo sí debe entrar
    [P in keyof T as P extends K ? never : P]: T[P]
}

type User2 = MyOmit<FullUser, 'id' | 'isValid'>

const user2: User2 = {
    name: 'Roque',
    createAt: new Date
}
