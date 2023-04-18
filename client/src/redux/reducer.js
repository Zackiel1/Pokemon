import { GET_POKEMON, GET_POKE_BY_NAME } from "./actions";

const inicialState = {
    pokemon: [],
    pokemonForName: []
}

const reducer = (state = inicialState, action) => {
    switch(action.type){
        case GET_POKEMON:
            return {
                ...state, pokemon: action.payload
            }
        case GET_POKE_BY_NAME:
            return{
                ...state, pokemonForName: action.payload
            }   
        default:
            return { ...state }
    }
}

export default reducer;