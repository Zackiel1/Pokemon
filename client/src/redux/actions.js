import axios from 'axios';
import { GET_POKEMON, ON_SEARCH, FILTER_TYPE, ORDER_NAME, ORDER_ATTACK, ON_CLOSE, GET_ALL_POKE, FILTER_ORIGIN, GET_TYPES, GET_NEXT, GET_PREV } from "./index";


export const getPokemon = () => {
    return async function(dispatch){
        const data = (await axios.get('http://localhost:3001/pokemons'));
        
        dispatch({ type: GET_POKEMON, payload: data});
    }
};

// export const getNext = (url) => {
//     return async function(dispatch){
//         let data = await getAllPokes(url);
//         data.data = data;

//         dispatch({ type: GET_NEXT, payload: data})      
//     }
// }

// export const getPrev = (url) => {
//     return async function(dispatch){
//         let data = await getAllPokes(url);
//         data.data = data;

//         dispatch({ type: GET_PREV, payload: data})          
//     }
// }

export const onSearch = (name) => {
    return async function(dispatch){
        await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
        .then(response => {
            dispatch({ type: ON_SEARCH, payload: response.data})
        }).catch(err => window.alert('Id o Name no exist'))
    }
}

export const getTypes = () => {
    return async function(dispatch){
        await axios.get('http://localhost:3001/types')
        .then(response => {
            dispatch({ type: GET_TYPES, payload: response.data})
        }).catch(err => err)
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



