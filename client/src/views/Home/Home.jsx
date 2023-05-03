import React from 'react';
import style from './Home.module.css'
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useDispatch } from 'react-redux';
import { filterType, orderName, orderAttack, filterOrigin } from '../../redux/actions';

const Home = (props) => {

    const dispatch = useDispatch();

    const handlerSelect = (evento) => {
        const target = evento.target;
        if(target.name === "Origin" && target.value){
            dispatch(filterOrigin(target.value))
        }
        if(target.name === "Type" && target.value){
            dispatch(filterType(target.value));
        }
        if(target.name === "Name" && target.value){
            dispatch(orderName(target.value))
        }
        if(target.name === "Attack" && target.value){
            dispatch(orderAttack(target.value))
        }
    }

    return(
        <div className={style.contenHome}>
            <div className={style.contenSelect}>
            <div className={style.filter}>
                <label>Filter By: </label>
                <select name="Origin" onClick={handlerSelect}>
                    <option value="All Origin">All Origin</option>
                    <option value="Api">Api</option>
                    <option value="DataBase">DataBase</option>
                </select>
                <select name="Type" onClick={handlerSelect}>
                    <option value="All types">All Types</option>
                    <option value="normal">Normal</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="fire">Fire</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="rock">Rock</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="water">Water</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="shadow">Shadow</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className={style.order}>
                <label>Order By: </label>
                <select name="Name" onClick={handlerSelect}>
                    <option value="">Name</option>
                    <option value="upward">A-Z</option>
                    <option value="descending">Z-A</option>
                </select>
                <select name="Attack" onClick={handlerSelect}>
                    <option value="">Attack</option>
                    <option value="upward">Hight-Low</option>
                    <option value="descending">Low-Hight</option>
                </select>
            </div>
            </div>

            <CardsContainer />
        </div>
    )
}

export default Home;