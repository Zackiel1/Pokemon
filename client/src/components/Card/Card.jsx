import React from "react";
import style from './Card.module.css'
import { Link } from "react-router-dom";

const Card = (props) => {
    
    return(
        <div className={style.card}>
            <img src={props.image} alt={`image of pokemon ${props.name}`} />

            <Link to={`/detail/${props.id}`}>
                <h2>{props.name}</h2>
            </Link>
            
            <h3>Type: {props.type}</h3>
        </div>
    )
}

export default Card;