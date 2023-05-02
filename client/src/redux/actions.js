import axios from 'axios';
import { GET_POKEMON, ON_SEARCH, FILTER_TYPE, ORDER_NAME, ORDER_ATTACK, ON_CLOSE, GET_ALL_POKE, FILTER_ORIGIN } from "./index";
// export const GET_POKEMON = "GET_POKEMON";
// export const GET_POKE_BY_NAME = "GET_POKE_BY_NAME";
// export const ON_SEARCH = "ON_SEARCH";
// export const FILTER_TYPE = "FILTER_TYPE";
// export const ORDER_NAME = "ORDER_NAME";
// export const ORDER_ATTACK = "ORDER_ATTACK";
// export const ON_CLOSE = "ON_CLOSE";
// export const GET_ALL_POKE = "GET_ALL_POKE";
// export const FILTER_ORIGIN = "FILTER_ORIGIN";


export const getPokemon = () => {
    return async function(dispatch){
        const pokeAPI = (await axios.get('http://localhost:3001/allPokemon'));
        dispatch({ type: GET_POKEMON, payload: pokeAPI});
    }
};

export const getAllPoke = (data) => {
    return{
        type: GET_ALL_POKE,
        payload: data
    }
}

export const onSearch = (name) => {
    return async function(dispatch){
        await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
        .then(response => {
            dispatch({ type: ON_SEARCH, payload: response.data})
        }).catch(err => window.alert('Id o Name no exist'))
    }
}

export const filterOrigin = (data) => {
    return{
        type: FILTER_ORIGIN,
        payload: data
    }
}

export const filterType = (type) => {
    return{
        type: FILTER_TYPE,
        payload: type
    }
}

export const orderName = (data) => {
    return{
        type: ORDER_NAME,
        payload: data
    }
}

export const orderAttack = (data) => {
    return{
        type: ORDER_ATTACK,
        payload: data
    }
}

export const onClose = (id) => {
    return{
        type: ON_CLOSE,
        payload: id
    }
}



