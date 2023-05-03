import React from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSearch } from '../../redux/actions';

const Nav = (props) => {
    
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    const handlerChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    
    return(
        <div className={style.navContainer}>
            <Link to='/home' className={style.link}>Home</Link>
            <Link to='/createPokemon' className={style.link}>Create Pokemon</Link>
            <Link to='/AllPokemons' className={style.link}>All Pokemons</Link>  

            <div>
                <input name='searchBar' type="search" onChange={handlerChange} placeholder='Insert name or id'/>  
                <button onClick={() => dispatch(onSearch(name.toLocaleLowerCase()))}>Search</button>  
            </div>  
        </div>
    )
}

export default Nav;