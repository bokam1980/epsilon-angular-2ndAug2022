const divide = (a, b) => {
    const p = new Promise(
        (resolveFn, rejectFn) => {
            let res = a / b
            if (res === Infinity)
                rejectFn('can not divide by zero')
            //throw new Error('can not divide by zero')
            resolveFn(res)
            //return res
        }
    );
    return p;
}
const divPromise = divide(12, 3)
divPromise
    .then(
        (output) => {
            console.log(output)
        },
        (error) => {
            console.log(error)
        }
    )
// .catch(
//     (err) => { console.log(error) }
// )

// try {
//     const res = divide(12, 0)
//     console.log(res)
// } catch (error) {
//     console.log(error.message)
// }
console.log('end of app')