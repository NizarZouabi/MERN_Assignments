import React, {useState, useEffect} from 'react';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState(0)
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPokemon({ pokemons: response.results }))
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className='d-flex flex-column'>
            <button className='ms-2 my-3 display-6 btn btn-secondary'>Pokemons List:</button>
            <ul className='ps-5' >
                {pokemon.pokemons ? pokemon.pokemons.map((pokemon,idx) => {
                    return (<li className='fw-bold' key={idx}>{pokemon.name}</li>)
                }):null}
            </ul>
        </div>
    );
}

export default Pokemon;
