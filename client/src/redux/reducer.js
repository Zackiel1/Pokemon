import { GET_POKEMON, ON_SEARCH, FILTER_TYPE, ORDER_NAME, ORDER_ATTACK, ON_CLOSE, GET_ALL_POKE, FILTER_ORIGIN } from "./index";

const inicialState = {
    pokemon: [],
    pokemonOnSearch: [],
    copyAllPokemon: [],
    urls: {}
}

const reducer = (state = inicialState, action) => {
    switch(action.type){
        case GET_POKEMON:
          
            return {
                ...state, 
                pokemon: action.payload.data.results,
                urls: action.payload.data.urls
                
            }

        case ON_SEARCH:
            return{
                ...state, 
                copyAllPokemon: state.pokemonOnSearch.concat(action.payload),
                pokemonOnSearch: state.pokemonOnSearch.concat(action.payload)
            }
   
        case FILTER_TYPE:
            let copyPokemons = [...state.pokemonOnSearch];

            if(action.payload === "All types"){
                return{
                    ...state,
                    pokemonOnSearch: state.copyAllPokemon
                }
            }
            return {
                ...state,
                pokemonOnSearch: copyPokemons.filter((poke) => {
                    return poke.type === action.payload;
                })
            }

        case ORDER_NAME:
            let copy = [...state.pokemonOnSearch];
            if(action.payload === "upward"){
                //ordena de manera acendente
                let orderPokemon = copy.sort((a, b) => a.name.localeCompare(b.name))
                
                return{
                    ...state,
                    pokemonOnSearch: orderPokemon
                }   
            }
            if(action.payload === "descending"){
                //ordena de manera decendente
                let orderPokemon = copy.sort((a, b) => b.name.localeCompare(a.name))
                
                return{
                    ...state,
                    pokemonOnSearch: orderPokemon
                }   
            }

        case ORDER_ATTACK:
            let copyA = [...state.pokemonOnSearch];

            if(action.payload === "upward"){
                //ordena de manera acendente
                let orderPokemon = copyA.sort((a, b) => b.attack - a.attack)
                
                return{
                    ...state,
                    pokemonOnSearch: orderPokemon
                }   
            }
            if(action.payload === "descending"){
                //ordena de manera decendente
                let orderPokemon = copyA.sort((a, b) => a.attack - b.attack)
                
                return{
                    ...state,
                    pokemonOnSearch: orderPokemon
                }   
            }

        case ON_CLOSE:

            let copyOnSearch = [...state.pokemonOnSearch];

            copyOnSearch = copyOnSearch.filter((char) => char.id !== action.payload)
        
            return {
                ...state,
                pokemonOnSearch: copyOnSearch,
                copyAllPokemon: copyOnSearch
            }
        
        case FILTER_ORIGIN:
            
            let copyPoke = [...state.copyAllPokemon];

            if(action.payload === "All Origin"){
                return{
                    ...state,
                    pokemonOnSearch: state.copyAllPokemon
                }
            }

            if(action.payload === "Api"){

                return{
                    ...state,
                    pokemonOnSearch: copyPoke.filter(a => !isNaN(a.id))
                }
            }

            if(action.payload === "DataBase"){
                
                return{
                    ...state,
                    pokemonOnSearch: copyPoke.filter(a => isNaN(a.id))
                }
            }

        case GET_ALL_POKE:
            return{
                ...state,
                pokemon: state.pokemon.concat(action.payload)
            }    
        
        default:
            return { ...state }
    }
}

export default reducer;