const sum = (a, b) => a + b
const diff = (a, b) => a - b

const sumAsync = (...args) => Promise.resolve(sum(...args))
const diffAsync = (...args) => Promise.resolve(diff(...args))

module.exports = { sum, diff, sumAsync, diffAsync }
