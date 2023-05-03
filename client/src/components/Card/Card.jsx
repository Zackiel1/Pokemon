import React from "react";
import style from './Card.module.css'
import { Link } from "react-router-dom";


const Card = (props) => {
    
    const { handlerOnClose } = props

    return(
        <div className={style.contenCard}>
            <div>
                {handlerOnClose && <button className={style.btnCard} onClick={() => handlerOnClose(props.id)}>Deteled</button>}
            </div>

            <p className={style.id}>#{props.id}</p>
            
            <img src={props.image} alt={`image of pokemon ${props.name}`} />

            <div>
                {
                handlerOnClose ?  
                <Link className={style.name} to={`/detail/${props.name}`}>
                    <h2>{props.name}</h2>
                </Link> :
                <h2 className={style.name} >{props.name}</h2>
                }
            </div>
            
            <h3 className={style.type}>Type: {props.type}</h3>
        </div>
    )
}

export default Card;