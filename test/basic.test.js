const { sum, diff, sumAsync, diffAsync } = require('../lib/math')
const { test, expect } = require('../lib/setup-globals')

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