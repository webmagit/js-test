const { sum, diff, sumAsync, diffAsync } = require('./math')

test('Addition', () => {

    let result = sum(1, 4)
    expect(result).toBe(5)

})

test('Subtraction', () => {

    let result = diff(4, 1)
    expect(result).toBe(3)

})

test('Addition Async', async () => {

    let result = await sumAsync(1, 4)
    expect(result).toBe(5)
})

test('Subtraction Async', async () => {

    let result = await diffAsync(4, 1)
    expect(result).toBe(3)
})

async function test(title, callback) {
    try {
        await callback()
        console.log(`Pass - ${title}`)
    } catch(error) {
        console.error(`Failed ${title}`)
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