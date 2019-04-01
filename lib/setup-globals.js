async function test(title, callback) {
  try {
    await callback()
    console.log(`Pass - ${title}`)
  } catch (error) {
    console.error(`Failed ${title}`)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but returned ${actual}`)
      }
    },
  }
}

module.exports = { test, expect }
