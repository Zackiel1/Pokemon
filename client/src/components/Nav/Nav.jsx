import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSearch } from '../../redux/actions';

const Nav = () => {
    
    const dispatch = useDispatch();
    
    const [name, setName] = useState("");

    useEffect(() => {
        handlerButton();
    }, [setName])

    const handlerChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handlerButton = () => {
        let onOff = true
        
        if(name !== ""){
            onOff = false
        }  
        return onOff
    }
    
    return(
        <div className={style.navContainer}>
            <Link to='/home' className={style.link}>Home</Link>
            <Link to='/createPokemon' className={style.link}>Create Pokemon</Link>
            <Link to='/AllPokemons' className={style.link}>About</Link>  

            <div>
                <input name='searchBar' id='searchBar' className={style.searchBar} type="search" onChange={handlerChange} placeholder='  Insert name or id...'/>  
                <button className={style.button} onClick={() => dispatch(onSearch(name.toLocaleLowerCase()))} disabled={handlerButton()} >Search</button>  
            </div>  
        </div>
    )
}

export default Nav;