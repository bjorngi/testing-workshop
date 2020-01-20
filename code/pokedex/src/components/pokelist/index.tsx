import React, {useState, useEffect, useCallback} from 'react';
import Pokemon from '../pokemon'

const Pokelist: React.FC = () => {
  const [pokelist, setPokelist] = useState<any[]>([])
  const [shouldLoadPokemons, setLoadPokemons] = useState(true)
  const [nextPokemonsUrl, setNextPokemonsUrl] = useState<string | null>(null)

  const appendPokemons = useCallback(
    (newPokemons) => {
      setPokelist([...pokelist, ...newPokemons])
    }, [pokelist]
  )

  const getUrl = useCallback(() => {
    if (nextPokemonsUrl) {
      return nextPokemonsUrl
    }
    return 'https://pokeapi.co/api/v2/pokemon'
  }, [nextPokemonsUrl])

  const loadPokemons = useCallback(() => setLoadPokemons(true), [])

  useEffect(() => {
    if (shouldLoadPokemons) {
      setLoadPokemons(false)


      fetch(getUrl())
        .then((res) => res.json())
        .then((data) => {
          appendPokemons(data.results)
          setNextPokemonsUrl(data.next)
        })
    }
  }, [appendPokemons, getUrl, loadPokemons, nextPokemonsUrl, shouldLoadPokemons])

  return (
    <div className="Pokelist">
      <div>Finn pokemon på navn: <input type='text' /></div>
      <button>Sorter på navn</button>
      <div className='stats'>Viser {pokelist.length} pokemons</div>
      <div className="pokemons">
        {pokelist.map((pokemon: any) => <Pokemon name={pokemon.name} />)}
      </div>
      <button onClick={loadPokemons}>Last flere</button>
    </div>
  );
}

export default Pokelist;
