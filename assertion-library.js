const { sum, diff } = require('./math')

function sumTest() {

    let result = sum(1, 4)
    expect(result).toBe(5)

}

function diffTest() {

    let result = diff(4, 1)
    expect(result).toBe(3)

}

test('Addition', sumTest)
test('Subtraction', diffTest)

function test(title, callback) {
    try {
        callback()
        console.log(`Pass - ${title}`)
    } catch(error) {
        throw new Error(`Failed ${title}`)
    }
}


function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Expected ${expected} but returned ${actual}`)
            }
        }
    }
}