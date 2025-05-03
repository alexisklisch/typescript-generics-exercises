// Convierte tuplas o arrays en union|types
// T[number] -> "number" abre la posibilidad a cualquier valor dentro
type TupleToUnion<T extends any[]> = T[number]

type MiTupla = ["rojo", "verde", "azul"]
type Colores = TupleToUnion<MiTupla>

const color: Colores = 'rojo'



interface A { type: "A"; a: number }
interface B { type: "B"; b: string }
interface C { type: "C"; c: boolean }

// Tupla de interfaces
type Plugins2 = [A, B, C];
// Union de todas ellas:
type PluginUnion = TupleToUnion<Plugins2>;

const elPlugin: PluginUnion = {type: "B", b: '23'}



type TextNode = {
  type: 'text'
  content: string
}

type ExpressionNode = {
  type: 'expression'
  content: string
}

type TagNode = {
  type: 'tag'
  tag: string,
  attr: Record<string, any>,
  child: Node[]
}

type NodeTypes = [TextNode, ExpressionNode, TagNode]
type Node = TupleToUnion<NodeTypes>

const exprNode: Node = {
  type:"expression",
  content: '() => "algo"'
}

const tagNode: Node = {
  tag: 'cosa',
  type: 'tag',
  attr: {},
  child: []
}

export {}