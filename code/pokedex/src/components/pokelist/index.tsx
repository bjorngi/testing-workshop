import React, {useState, useEffect} from 'react';

const Pokelist: React.FC = () => {
  const [pokelist, setPokelist] = useState([])

useEffect(() => {
fetch('https://pokeapi.co/api/v2/pokemon')
.then((res) => res.json())
.then((data) => {
  setPokelist(data.next)
})
}, [])

  return (
    <div className="Pokelist">
      <div className='stats'>Viser {pokelist.length} pokemons</div>
      <button>Last flere</button>
    </div>
  );
}

export default Pokelist;
