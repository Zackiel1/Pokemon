import React, { useEffect, useState } from "react";
import style from './AllPokemons.module.css'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/actions";
import Card from "../../components/Card/Card";


const AllPokemons = () => {
    return(
        <div className={style.content}>
            <h2>...En Construcción</h2>
        </div>  
    ) 
}

export default AllPokemons;