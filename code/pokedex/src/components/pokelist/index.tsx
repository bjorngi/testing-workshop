import React, {useState, useEffect, useCallback} from 'react';
import Pokemon from '../pokemon'


export const sortPokemon = (pokemons: any[]) => (
  pokemons.sort((a, b) => (a.name < b.name) ? -1 : 1)
)

const Pokelist: React.FC = () => {
  const [pokelist, setPokelist] = useState<any[]>([])
  const [parsedPokelist, setParsedPokelist] = useState<any[]>([])
  const [shouldLoadPokemons, setLoadPokemons] = useState(true)
  const [nextPokemonsUrl, setNextPokemonsUrl] = useState<string | null>(null)
  const [showSorted, setShowSorted] = useState<boolean>(false)

  const toggleShowSorted = useCallback(() => {
    setShowSorted(!showSorted)
  }, [showSorted])

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
    if (showSorted) {
      setParsedPokelist(sortPokemon(pokelist))
    } else {
      setParsedPokelist(pokelist)
    }
  }, [pokelist, showSorted])


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
      <div>Finn pokemon på navn: <input type='text' /><button>Søk</button></div>
      <button onClick={toggleShowSorted}>Sorter på navn</button>
      <div className='stats'>Viser {parsedPokelist.length} pokemons {showSorted &&'sortert'}</div>
      <div className="pokemons">
        {parsedPokelist.map((pokemon: any) => <Pokemon key={pokemon.name} name={pokemon.name} />)}
      </div>
      <button onClick={loadPokemons}>Last flere</button>
    </div>
  );
}

export default Pokelist;
