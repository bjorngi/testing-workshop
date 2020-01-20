const addOne = (number) => number + 1

// Jest
describe('Number logic', () => {
  test('should add one to number success', () => {
    const expected = 10
    const acutal = addOne(9)
    expect(acutal).toBe(expected)
  })

  test('should add one to number fail', () => {
    const expected = 11
    const acutal = addOne(9)
    expect(acutal).toBe(expected)
  })
})
