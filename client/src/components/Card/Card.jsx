import React from "react";
import style from './Card.module.css'
import { Link } from "react-router-dom";


const Card = (props) => {
    
    const { handlerOnClose } = props

    return(
        <div className={style.card}>
            <div>
                {handlerOnClose && <button onClick={() => handlerOnClose(props.id)}>x</button>}
            </div>
            
            <img src={props.image} alt={`image of pokemon ${props.name}`} />

            <div>
                {
                handlerOnClose ?  
                <Link to={`/detail/${props.name}`}>
                    <h2>{props.name}</h2>
                </Link> :
                <h2>{props.name}</h2>
                }
            </div>
            
            <h3>Type: {props.type}</h3>
        </div>
    )
}

export default Card;