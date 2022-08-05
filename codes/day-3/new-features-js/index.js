//object literal syntax
const obj = {
    //value properties
    name: 'anil',
    id: 1,
    salary: 1000,

    //functional property
    print: function () {
        return this.name
    }
}
// console.log(obj.name)
// console.log(obj['salary'])
// console.log(obj.print())
obj.location = 'Bangalore'
obj['address'] = 'ECity'

//... => spread operator
const copyObj = {
    ...obj
}

obj.x = 100
console.log(copyObj.__proto__)
// for (let propName in obj) {
//     const propValue = obj[propName]
//     //console.log(propName + ':' + propValue)
//     //console.log(`${propName}:${propValue}`)
//     copyObj[propName] = propValue
// }


console.log(copyObj)
//console.log(obj.__proto__)
//console.log(global.__proto__)
//console.log(window.__proto__)

const numbers1 = [1, 2, 3, 4]
const numbers2 = [6, 7, 8]

const copyNumbers = [...numbers1, 10, 20, ...numbers2]
console.log(copyNumbers)

// let nameValue = obj.name
// let idValue = obj['id']
// let salaryValue = obj.salary

//object destructuring
const { name: nameValue, id: idValue, salary: salaryValue } = obj

console.log(nameValue, idValue, salaryValue)

//rest operator
// function calAvg(args) {
function calAvg(val, ...args) {
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    return sum / args.length
}

// calAvg([1, 2, 3, 4])
// calAvg([1, 2, 3, 4, 5, 6])
// calAvg([1, 2, 3, 4, 5, 6, 7, 8])
calAvg('anil', 1, 2, 3, 4)
calAvg('sunil', 1, 2, 3, 4, 5, 6)
calAvg('mahesh', 1, 2, 3, 4, 5, 6, 7, 8)


