import { GET_POKEMON, ON_SEARCH, FILTER_TYPE, ORDER_NAME, ORDER_ATTACK, ON_CLOSE, FILTER_ORIGIN, GET_TYPES, GET_NEXT, GET_PREV } from "./index";

const inicialState = {
    pokemon: [],
    copyAllPokemon: [],
    pokemonOnSearch: [],
    allTypes: [],
    copyPokemonOnSearch: [],
}

const reducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_POKEMON:

            return {
                ...state,
                pokemon: action.payload.data.results,
                copyAllPokemon: action.payload.data.results,
            }

        case ON_SEARCH:
            return {
                ...state,
                copyPokemonOnSearch: state.pokemonOnSearch.concat(action.payload),
                pokemonOnSearch: state.pokemonOnSearch.concat(action.payload)
            }

        case FILTER_TYPE:
            let copyPokemons = [...state.copyAllPokemon];

            if (action.payload === "All types") {

                return {
                    ...state,
                    pokemon: [...state.copyAllPokemon]
                }
            }
            return {
                ...state,
                pokemon: copyPokemons.filter((poke) => {
                    return poke.type[0] === action.payload || poke.type[1] === action.payload;
                })
            }

        case ORDER_NAME:
            let copy = [...state.pokemon];

            if (action.payload === "upward") {
                //ordena de manera acendente
                let orderPokemon = copy.sort((a, b) => a.name.localeCompare(b.name))

                return {
                    ...state,
                    pokemon: orderPokemon
                }
            }
            if (action.payload === "descending") {
                //ordena de manera decendente
                let orderPokemon = copy.sort((a, b) => b.name.localeCompare(a.name))

                return {
                    ...state,
                    pokemon: orderPokemon
                }
            }

        case ORDER_ATTACK:
            let copyA = [...state.pokemon];

            if (action.payload === "upward") {
                //ordena de manera acendente
                let orderPokemon = copyA.sort((a, b) => b.attack - a.attack)

                return {
                    ...state,
                    pokemon: orderPokemon
                }
            }
            if (action.payload === "descending") {
                //ordena de manera decendente
                let orderPokemon = copyA.sort((a, b) => a.attack - b.attack)

                return {
                    ...state,
                    pokemon: orderPokemon
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

            let copyPoke = [...state.copyPokemonOnSearch];

            if (action.payload === "All Origin") {
                return {
                    ...state,
                    pokemonOnSearch: state.copyPokemonOnSearch
                }
            }

            if (action.payload === "Api") {

                return {
                    ...state,
                    pokemonOnSearch: copyPoke.filter(a => !isNaN(a.id))
                }
            }

            if (action.payload === "DataBase") {

                return {
                    ...state,
                    pokemonOnSearch: copyPoke.filter(a => isNaN(a.id))
                }
            }

        case GET_TYPES:

            return {
                ...state,
                allTypes: action.payload
            }

        default:
            return { ...state }
    }
}

export default reducer;