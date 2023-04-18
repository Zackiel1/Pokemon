import axios from 'axios';

export const GET_POKEMON = "GET_POKEMON";
export const GET_POKE_BY_NAME = "GET_POKE_BY_NAME"

export const getPokemon = () => {
    return async function(dispatch){
        const pokeAPI = (await axios.get('http://localhost:3001/pokemons')).data;
        dispatch({ type: GET_POKEMON, payload: pokeAPI});
    }
};

export const getPokeByName = (query) => {
    return async function(dispatch){
        const pokeApiByName = (await axios.get(`http://localhost:3001/pokemons/${query}`)).data;
        dispatch({ type: GET_POKE_BY_NAME, payload: pokeApiByName})
    }
}

