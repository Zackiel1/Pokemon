import React, { useEffect } from 'react';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../../redux/actions';

const Home = (props) => {
    const {pokemonName} = props
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getPokemon());
    // }, [])



    return(
        <div>


            <h3>Soy el Home</h3>
            <CardsContainer pokemonName={pokemonName}/>
        </div>
    )
}

export default Home;