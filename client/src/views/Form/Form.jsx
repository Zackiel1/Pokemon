import axios from 'axios';
import React, { useState } from 'react';
import validations from './validations';
import style from './Form.module.css'

const Form = () => {

    const [form, setForm] = useState({
        name: "",
        image: "",
        life: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        type: ""
    })

    const [error, setError] = useState({
        name: "",
        image: "",
        life: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        type: ""
    })

    const handlerChange = (event) => {
        let property = event.target.name;
        let value = event.target.value;

        setError(validations({ ...form, [property]: value }))
        setForm({ ...form, [property]: value })

    }

    const handlerSubmit = (event) => {
        event.preventDefault();


        axios.post('http://localhost:3001/pokemons', form)
            .then(res => {
                let msg = res.data.message
                window.alert(msg)
            })
            .then(res => {
                setForm({
                    name: "",
                    image: {},
                    life: 0,
                    attack: 0,
                    defense: 0,
                    speed: 0,
                    height: 0,
                    weight: 0,
                    type: ""
                })
            }).catch(err => window.alert("This name already exist"))


    }


    return (
        <div className={style.divConten}> 
            <form onSubmit={handlerSubmit} className={style.formConten}>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Name: </label>
                    <input type="text" name="name" value={form.name} onChange={handlerChange} placeholder='insert name'/>
                    <label className={style.warning}>{error.name}</label>
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Image: </label>
                    <input type="text" name="image" onChange={handlerChange} placeholder='insert image url'/>
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Life: </label>
                    <input type="number" name="life" value={form.life} onChange={handlerChange} />
                    <label className={style.warning}>{error.life}</label>
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Attack: </label>
                    <input type="number" name="attack" value={form.attack} onChange={handlerChange} />
                    <label className={style.warning}>{error.attack}</label>
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Defense: </label>
                    <input type="number" name="defense" value={form.defense} onChange={handlerChange} />
                    <label className={style.warning}>{error.defense}</label>
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Speed: </label>
                    <input type="number" name="speed" value={form.speed} onChange={handlerChange} />
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Height: </label>
                    <input type="number" name="height" value={form.height} onChange={handlerChange} />
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Weight: </label>
                    <input type="number" name="weight" value={form.weight} onChange={handlerChange} />
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Type: </label>
                    <select name="type" onClick={handlerChange}>
                        <option defaultValue="">Types</option>
                        <option value="normal" >Normal</option>
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
                    <label className={style.warning}>{error.type}</label>

                </div>

                <button type="submit" >Submit</button>
            </form>
        </div>



    )
}

export default Form;