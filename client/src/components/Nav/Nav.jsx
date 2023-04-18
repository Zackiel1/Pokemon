import React from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.css'
import { useState } from 'react';
import axios from 'axios';

const Nav = (props) => {
    const { onSearch } = props
    
    const [name, setName] = useState("");

    const handlerChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    
    
    return(
        <div className={style.navContainer}>
            <Link to='/home'>Home</Link>
            <Link to='/createPokemon'>Create Pokemon</Link> 

            <div>
                <input name='searchBar' type="search" onChange={handlerChange}/>  
                <button onClick={() => onSearch(name)}>Buscar</button>  
            </div>  
        </div>
    )
}

export default Nav;