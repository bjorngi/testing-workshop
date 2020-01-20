export const fetchPokemon = (pokemon) => fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then(resp.json())
  .catch(err => err.message)
