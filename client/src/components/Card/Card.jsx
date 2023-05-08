import React from "react";
import style from './Card.module.css'
import { Link } from "react-router-dom";


const Card = (props) => {
    
    const { handlerOnClose } = props
    
    let types = props.type.map(t => t)

    return(
        <div className={style.contenCard}>
            <div>
                {handlerOnClose && <button className={style.btnCard} onClick={() => handlerOnClose(props.id)}>Deteled</button>}
            </div>

            <p className={style.id}>#{props.id}</p>
            
            <img src={props.image} alt={`image of pokemon ${props.name}`} />

            <div>    
                <Link className={style.name} to={`/detail/${props.name}`}>
                    <h2>{props.name}</h2>
                </Link>
            </div>
            
            <h3 className={style.type}>Type: {types[0]} {types[1]}</h3>
        </div>
    )
}

export default Card;