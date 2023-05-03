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
        <div className={style.contenDetail}>
            <div className={style.contenCard}>
                <h4 className={style.id}># {poke.id}</h4>
                <h2 className={style.name}>{poke.name}</h2>
                <br />
                <img src={poke.image} alt={`image of pokemon ${poke.name}`}/>
                <br />
                <h3 className={style.stat}>Life: {poke.life}</h3>
                <h3 className={style.stat}>Attack: {poke.attack}</h3>
                <h3 className={style.stat}>Defense: {poke.defense}</h3>
                <h3 className={style.stat}>Speed: {poke.speed}</h3>
                <h3 className={style.stat}>Height: {poke.height}</h3>
                <h3 className={style.stat}>Weight: {poke.weight}</h3>
                <h3 className={style.stat}>Type: {poke.type}</h3>
            </div>
        </div>
        
    )
}

export default Detail;
