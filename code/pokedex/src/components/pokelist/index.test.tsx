import {sortPokemon} from './'

const pokemons = [
  {
    name: 'blastoise',
    id: 4,
  },
  {
    name: 'ivysaur',
    id: 2
  },
  {
    name: 'albazaur',
    id: 5
  },
  {
    name: 'chariazard',
    id: 5
  }
]

test('should sort pokemons', () => {
  const sortedPokemons = sortPokemon(pokemons)
  expect(sortedPokemons[0].name).toBe('albazaur')
  expect(sortedPokemons[3].name).toBe('ivysaur')
})
