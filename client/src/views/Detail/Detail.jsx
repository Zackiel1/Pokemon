import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import style from './Detail.module.css';

const Detail = () => {

    const {detailId} = useParams();
   
    const [poke, setPoke] = useState({});

    useEffect(async () => {
       await axios.get(`http://localhost:3001/pokemons/${detailId}`)
       .then(response => {
            setPoke(response.data)
       })
    },[]);   
    
    return(
        <div className={style.card}>
            <h4>id: {poke.id}</h4>
            <h2>Name: {poke.name}</h2>
            <br />
            <img src={poke.image} alt={`image of pokemon ${poke.name}`}/>
            <br />
            <h3>Hp: {poke.hp}</h3>
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