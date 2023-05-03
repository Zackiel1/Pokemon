import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import style from './Landing.module.css'
import logo from "../../img/letras.png"

const Landing = () => {
    return(
        <div className={style.containerLanding}>

            <h1>Pokedex</h1>

            <div className={style.containerLink}>
                <Link to="/home" className={style.link}>
                    Ingresa ahora
                </Link>
            </div>
            
            
        </div>
        
    )
}

export default Landing;
