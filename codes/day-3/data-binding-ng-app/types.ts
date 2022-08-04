function add(a: number, b: number): number {
    return (a + b)
}
const subtract = (a: number, b: number, c: number): number => {
    return (a - b - c)
}


type myType = number | string | void | null | undefined
type fnType = (x: number, y: number) => myType
function invoke(fnRef: fnType) {
    return fnRef(10, 20)?.toString()
}
// function invoke(fnRef: (x: number, y: number) => number | string | void | undefined | null) {
//     return fnRef(10, 20)?.toString()
// }
invoke(add)
// invoke(subtract)