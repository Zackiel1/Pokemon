import React from "react";
import Card from '../Card/Card.jsx';
import style from './CardsContainer.module.css'
//import { useSelector } from "react-redux";


const CardsContainer = (props) => {

  //const pokemon = useSelector(state=>state.pokemon);
    const {pokemonName} = props;
    return(
        <div className={style.cardsContainer}>
            {pokemonName.map(p => {
                return <Card
                    key={p.name}
                    id={p.id}
                    image={p.image}
                    name={p.name}
                    type={p.type}
                />
            })}
        </div>
    )
}

export default CardsContainer;