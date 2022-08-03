import { add, multiply, subtract } from "./utility";

const addResult = add(10, 20)
const subResult = subtract(10, 4)
const multiResult = multiply(10, 4)
console.log(addResult, subResult)

const spanEle = <HTMLSpanElement>document.getElementById('resultSpan');
spanEle.innerText = multiResult.toString()

const buttonEle = <HTMLButtonElement>document.getElementById('btnClick')
buttonEle.addEventListener(
    'click',
    () => {
        console.log((<HTMLInputElement>document.getElementById('txtName')).value)
    })