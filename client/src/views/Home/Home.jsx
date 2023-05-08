import React, { useEffect, useState } from 'react';
import style from './Home.module.css'
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { filterType, orderName, orderAttack, filterOrigin, getPokemon, getNext, getPrev } from '../../redux/actions';
import Card from '../../components/Card/Card';

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(12);
    let amountPoke = 12

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPokemon())
           
    }, [])

    const pokemon = useSelector(state => state.pokemon) 
    
    // useEffect(() => {
    //     setNextUrl(urlNextPrev.next)
    //     setPrevUrl(urlNextPrev.previous)
    // }, [urlNextPrev])
    const resetPages = () => {
        setStart(0)
        setEnd(12)
        setCurrentPage(1)
    }
   
    const handlerSelect = (evento) => {
        const target = evento.target;
        if (target.name === "Origin" && target.value) {
            dispatch(filterOrigin(target.value))
        }
        if (target.name === "Type" && target.value) {
            dispatch(filterType(target.value));
            document.getElementById("attack").selectedIndex = 0;
            document.getElementById("name").selectedIndex = 0;
            resetPages();
        }
        if (target.name === "Name" && target.value) {
            dispatch(orderName(target.value))
            document.getElementById("attack").selectedIndex = 0;
            resetPages();
        }
        if (target.name === "Attack" && target.value) {
            dispatch(orderAttack(target.value))
            document.getElementById("name").selectedIndex = 0;
            resetPages();
        }
    }

    
    const handleNext = async () => {
        setStart(start + amountPoke)
        setEnd(end + amountPoke) 
        setCurrentPage(currentPage + 1)
    }

    const handlePrev = () => {
        setStart(start - amountPoke)
        setEnd(end - amountPoke)
        setCurrentPage(currentPage - 1)
    }

    return (
        <div className={style.contenHome}>

            <CardsContainer />

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
                    <select name="Name" id='name' onClick={handlerSelect}>
                        <option value="">Name</option>
                        <option value="upward">A-Z</option>
                        <option value="descending">Z-A</option>
                    </select>
                    <select name="Attack" id='attack' onClick={handlerSelect}>
                        <option value="">Attack</option>
                        <option value="upward">Hight-Low</option>
                        <option value="descending">Low-Hight</option>
                    </select>
                </div>

            </div>
            {pokemon?.slice(start, end).map(p => {
                return <Card
                    key={p.id}
                    id={p.id}
                    image={p.image}
                    name={p.name}
                    type={p.type}
                />
            })}

            <div >
                <button onClick={handlePrev} disabled={start===0}>
                    Prev
                </button>

                <div>
                    <p className={style.namePage}> Page {currentPage}</p>
                </div>

                <button onClick={handleNext} disabled={end >= pokemon.length}>
                    Next
                </button>
            </div>

        </div>
    )
}

export default Home;