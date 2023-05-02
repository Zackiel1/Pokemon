import axios from 'axios';
import React, { useState } from 'react';
import validations from './validations';

const Form = () => {

    const [hasErrors, setHasErrors] = useState(false);

    const [form, setForm] = useState({
        name:"",
        image:{},
        life:0,
        attack:0,
        defense:0,
        speed:0,
        height:0,
        weight:0,
        type:""
    })

    const [error, setError] = useState({
        name:"",
        image:{},
        life:0,
        attack:0,
        defense:0,
        speed:0,
        height:0,
        weight:0,
        type:""
    })
    
    const handlerChange = (event) => {
        let property = event.target.name;
        let value = event.target.value;
    
        setError(validations({...form, [property]: value})) 
        setForm({...form, [property]: value})
    
    }

    const handlerSubmit = (event) => {
        event.preventDefault();

        // try {
        //     axios.post('http://localhost:3001/pokemons', form)
        //         //.then(res => alert("Pokemon Creado"))
        //         .then(res => {
        //             setForm({
        //                 name:"",
        //                 image:{},
        //                 life:0,
        //                 attack:0,
        //                 defense:0,
        //                 speed:0,
        //                 height:0,
        //                 weight:0,
        //                 type:""
        //             })
        //         })
        // } catch (error) {
        //     alert("error")
        // }
        

            axios.post('http://localhost:3001/pokemons', form)
                .then(res => {
                    let msg = res.data.message
                    window.alert(msg)
                })
                .then(res => {
                    setForm({
                        name:"",
                        image:{},
                        life:0,
                        attack:0,
                        defense:0,
                        speed:0,
                        height:0,
                        weight:0,
                        type:""
                    })    
                }).catch(err => window.alert("This name already exist0"))
        
        
    }
    

    return(
        <form onSubmit={handlerSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" name="name" value={form.name} onChange={handlerChange}/>
                <label>{error.name}</label>
            </div>
            <div>
                <label>Image: </label>
                <input type="file" name="image" onChange={handlerChange}/>
            </div>
            <div>
                <label>Life: </label>
                <input type="number" name="life" value={form.life} onChange={handlerChange}/>
                <label>{error.life}</label>
            </div>
            <div>
                <label>Attack: </label>
                <input type="number" name="attack" value={form.attack} onChange={handlerChange}/>
                <label>{error.attack}</label>
            </div>
            <div>
                <label>Defense: </label>
                <input type="number" name="defense" value={form.defense} onChange={handlerChange}/>
                <label>{error.defense}</label>
            </div>
            <div>
                <label>Speed: </label>
                <input type="number" name="speed" value={form.speed} onChange={handlerChange}/>
            </div>
            <div>
                <label>Height: </label>
                <input type="number" name="height" value={form.height} onChange={handlerChange}/>
            </div>
            <div>
                <label>Weight: </label>
                <input type="number" name="weight" value={form.weight} onChange={handlerChange}/>
            </div>
            <div>
                <label>Type: </label>
                <select name="type" onClick={handlerChange}>
                    <option defaultValue= "">Types</option>
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
                <label>{error.type}</label>
            </div>
            <button type="submit">Submit</button>
        </form>
        
    )
}

export default Form;