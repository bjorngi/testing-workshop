export const fetchPokemon = (fetch) => (pokemon) => fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then(resp.json())
  .catch(err => err.message)

const injectedMockSuccess = (url) => new Promise((promise) => promise.resolve({
  json: () => new Promise((promise) => promise.resolve({name: 'ditto'}))
}))

const injectedMockFail = new Promise((promise) => promise.reject({error: 'some error'}))

describe('API Test', () => {
  test('should get pokemon', async () => {
    const expectedName = 'ditto'
    const actualName = fetchPokemon(injectedMockSuccess)('ditto')

    await expect(actualName).resolves.toBe(expectedName)
  })

  // test('should handle error', () => {
  // })
})
