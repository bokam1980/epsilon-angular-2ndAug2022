const divide = async (a, b) => {
    let res = a / b
    if (res === Infinity)
        throw new Error('can not divide by zero')
    return res
}
// const divPromise = divide(12, 3)
// divPromise
//     .then(
//         (output) => {
//             console.log(output)
//         },
//         (error) => {
//             console.log(error)
//         }
//     )
// .catch(
//     (err) => { console.log(error) }
// )
(
    async () => {
        try {
            const res = await divide(12, 0)
            console.log(res)
        } catch (error) {
            console.log(error.message)
        }
    }
)();
console.log('end of app')