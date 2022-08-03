//call thsoe functions from here and pass two values

//common js format
// var utilityModuleExports = require('./utility') //{addFn:add, subtractFn:subract}
//var { add, subtract } = require('./utility') //{addFn:add, subtractFn:subract}

//ES6 import
import { add, multiply, subtract } from "./utility";

// var addResult = utilityModuleExports.add(10, 20)
// var subResult = utilityModuleExports.subtract(10, 4)
const addResult = add(10, 20)
const subResult = subtract(10, 4)
const multiResult = multiply(10, 4)
console.log(addResult, subResult)

const spanEle = <HTMLSpanElement>document.getElementById('resultSpan');
spanEle.innerText = multiResult.toString()
//console.log(module)
console.log('hello')

//function expression
// const call = (name: string) => {
//     alert(name)
// }


const buttonEle = <HTMLButtonElement>document.getElementById('btnClick')
buttonEle.addEventListener(
    'click',
    (e) => {
        console.log(e)
        console.log((<HTMLInputElement>document.getElementById('txtName')).value)
    })

//function declaration
// function call(name: string) {
//     alert(name)
// }
