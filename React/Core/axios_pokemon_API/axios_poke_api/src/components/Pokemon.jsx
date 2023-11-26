import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then((response) => {setPokemon(response.data.results)})
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className='d-flex flex-column'>
            <button className='ms-2 my-3 display-6 btn btn-secondary'>Fetch Pokemon</button>
            <ul className='ps-5' >
                {
                    pokemon.map((pokemon) => {
                        return (<li>{pokemon.name}</li>)
                    })
                }
            </ul>
        </div>
    );
}

export default Pokemon;
