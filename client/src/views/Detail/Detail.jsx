import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import style from './Detail.module.css';
import { useSelector } from 'react-redux';

const Detail = () => {

    const params = useParams();
    const namePoke = params.namePoke;

    const {pokemonOnSearch, pokemon} = useSelector(state=>state);
    let pokemons = pokemonOnSearch.concat(pokemon);
    
    let poke = pokemons.filter(poke => poke.name === namePoke)[0]
    
      
    return(
        <div className={style.card}>
            <h4>id: {poke.id}</h4>
            <h2>Name: {poke.name}</h2>
            <br />
            <img src={poke.image} alt={`image of pokemon ${poke.name}`}/>
            <br />
            <h3>Life: {poke.life}</h3>
            <h3>Attack: {poke.attack}</h3>
            <h3>Defense: {poke.defense}</h3>
            <h3>Speed: {poke.speed}</h3>
            <h3>Height: {poke.height}</h3>
            <h3>Weight: {poke.weight}</h3>
            <h3>Type: {poke.type}</h3>
        </div>
    )
}

export default Detail;
