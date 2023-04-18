import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Landing = () => {
    return(
        <div>
            <h3>Bienvenido a Pokemon</h3>

            
            <Link to="/home">
                <input type="button" value="start"/>
            </Link>
        </div>
    )
}

export default Landing;
