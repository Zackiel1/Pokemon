import React, { useEffect, useState } from "react";
import style from './AllPokemons.module.css'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/actions";
import Card from "../../components/Card/Card";


const AllPokemons = () => {

    const { pokemon } = useSelector(state => state)

    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=12&limit=12");
    const [prevUrl, setPrevUrl] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {

        try {
            dispatch(getPokemon())
        } catch (error) {
            console.log(error);
        }

    }, [])

    let pokemonResult = pokemon;

    const getPoke = async (url) => {
        let arrayPoke = [];
        let result = {};

        await axios.get(`${url}`)
            .then(async (response) => {

                let resultApi = response.data.results;

                let pokemonApi = [];
                resultApi.map((p) => pokemonApi.push(axios.get(p.url))); // Se guarda en pokemonApi cada promesa(pending) de cada pokemon

                await Promise.all(pokemonApi)
                    .then((pokemons) => {
                        arrayPoke = pokemons.map((p) => {
                            return {
                                id: p.data.id,
                                name: p.data.name,
                                image: p.data.sprites.other.dream_world.front_default,
                                life: p.data.stats[0].base_stat,
                                attack: p.data.stats[1].base_stat,
                                defense: p.data.stats[2].base_stat,
                                speed: p.data.stats[5].base_stat,
                                height: p.data.height,
                                weight: p.data.weight,
                                type: p.data.types[0].type.name
                            }
                        })

                        result.next = response.data.previous;
                        result.urls = { next: response.data.next, previous: response.data.previous }
                        result.results = arrayPoke;

                    }).catch(error => error)
            }).catch(error => error)

        return result;
    }

    const handleNext = async () => {
        const result = await getPoke(nextUrl);
        setPokemonList(result.results);
        setNextUrl(result.urls.next);
        setPrevUrl(result.urls.previous);
        setCurrentPage(currentPage + 1);


    };
    const handlePrev = async () => {
        const result = await getPoke(prevUrl);
        setPokemonList(result.results);
        setNextUrl(result.urls.next);
        setPrevUrl(result.urls.previous);
        setCurrentPage(currentPage - 1);
    };

    if (currentPage > 1) {
        pokemonResult = pokemonList
    }

    return (
        <div>
            <div className={style.cardsContainer}>
                {pokemonResult.length > 1 && pokemonResult.map(p => {
                    return <Card
                        key={p.id}
                        id={p.id}
                        image={p.image}
                        name={p.name}
                        type={p.type}
                    />
                })
                }
            </div>
            <div>
                <div className={style.pages}>
                    <button onClick={handlePrev} disabled={!prevUrl}>
                        Prev
                    </button>

                    <div>
                        <p className={style.namePage}> Page {currentPage}</p>
                    </div>

                    <button onClick={handleNext} disabled={!nextUrl}>
                        Next
                    </button>
                </div>
            </div>

        </div>

    )
}

export default AllPokemons;