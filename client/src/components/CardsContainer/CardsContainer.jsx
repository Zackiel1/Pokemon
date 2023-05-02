import React from "react";
import Card from '../Card/Card.jsx';
import style from './CardsContainer.module.css'
import { useDispatch, useSelector } from "react-redux";
import { onClose } from "../../redux/actions";


const CardsContainer = () => {

  const dispatch = useDispatch();  

  const pokemon = useSelector(state=>state.pokemonOnSearch);

  const handlerOnClose = (id) => {
    dispatch(onClose(id))
  }

    return(
        <div className={style.cardsContainer}>
            {pokemon.map(p => {
                return <Card
                    key={p.name}
                    id={p.id}
                    image={p.image}
                    name={p.name}
                    type={p.type}
                    handlerOnClose={handlerOnClose}
                />
            })}
        </div>
    )
}

export default CardsContainer;