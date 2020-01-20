import React, {useEffect, useState} from 'react';

const Pokemon = ({name}: {name: string}) => {
  const [pokemon, setPokemon] = useState()
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data)
      })
  }, [name])


  if (pokemon) {
    return (
      <div className='Pokemon'>
        <img src={pokemon.sprites.front_default} alt={name} />
        <div>{pokemon.name}</div>
      </div>
    )
  }
  return null
}

export default Pokemon
