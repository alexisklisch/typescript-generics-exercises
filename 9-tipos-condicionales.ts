// Si esto es así, el tipo será asá

type IsString<T> = T extends string ? true : false
type StringType = IsString<string>   // true
type StringType2 = IsString<"texto"> // true
type NumberType = IsString<number>   // false
type NumberType2 = IsString<23>      // false



type Validate<T> = T extends string ? "es string" : "no es string";

// Uso:
type Mensaje = Validate<string>;  // "es string"
type Mensaje2 = Validate<number>; // "no es string"

const msj: Mensaje = 'es string'
const num: Mensaje2 = 'no es string'




type APIBody<T> = T extends string
  ? { content: string }
  : { data: T };

const body1 = 'Es un texto'
const body2 = {
  es: {
    un: 'objeto'
  }
}

const send1: APIBody<typeof body1> = {
  content: body1
}

const send2: APIBody<typeof body2> = {
  data: body2
}

// send2.data.es.un.length