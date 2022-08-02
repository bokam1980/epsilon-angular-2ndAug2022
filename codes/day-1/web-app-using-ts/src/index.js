//call thsoe functions from here and pass two values


// var utilityModuleExports = require('./utility') //{addFn:add, subtractFn:subract}
//var { add, subtract } = require('./utility') //{addFn:add, subtractFn:subract}

//ES6 import
import { add, subtract } from "./utility";

// var addResult = utilityModuleExports.add(10, 20)
// var subResult = utilityModuleExports.subtract(10, 4)
var addResult = add(10, 20)
var subResult = subtract(10, 4)
console.log(addResult, subResult)

console.log('welcome')
//console.log(module)