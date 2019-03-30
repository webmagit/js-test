const { sum, diff } = require('./math')

let result = sum(1, 4)

console.log(`The result is ${result}`)

// test('Fresh test for sum', sum(3, 3))

function test(title, callback) {
    try {
        callback()
    } catch(e) {
        throw new Error(`Failed: ${title} with exception: ${e}`)
    }
}