import React from "react";
import style from './Card.module.css'
import { Link } from "react-router-dom";


const Card = (props) => {
    
    const { handlerOnClose } = props
    
    let types = props.type.map(t => t)

    return(
        <div className={style.contenCard}>
            <div>
                {handlerOnClose && <button className={style.btnCard} onClick={() => handlerOnClose(props.id)}></button>}
            </div>

            
            
            <img src={props.image} alt={`image of pokemon ${props.name}`} />
   
                <Link className={style.link} to={`/detail/${props.name}`}>
                    <h2 className={style.name}>{props.name}</h2>
                </Link>
            
            <div className={style.type}>
                <span className={style[types[0]]}>{types[0]}</span>
                <span className={style[types[1]]}>{types[1]}</span>
            </div>
            
        </div>
    )
}

export default Card;