import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import style from './Landing.module.css'
import logo from "../../img/letras.png"

const Landing = () => {
    return(
        <div className={style.containerLanding}>

            <h1>PokeCards</h1>

            <div className={style.containerLink}>
                <Link to="/home" className={style.link}>
                Login now
                </Link>
            </div>
            
            
        </div>
        
    )
}

export default Landing;
