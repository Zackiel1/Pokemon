import axios from 'axios';
import React, { useEffect, useState } from 'react';
import validations from './validations';
import style from './Form.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getTypes } from '../../redux/actions';

const Form = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTypes()) 
    }, [])

    const allTypes = ["Select"].concat(useSelector(state=>state.allTypes));
    
    const [handlerButton, setHandlerButton] = useState(true);

    const [form, setForm] = useState({
        name: "",
        image: "",
        life: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        type: []
    })

    const [error, setError] = useState({})

    const handlerChange = (event) => {
        let property = event.target.name;
        let value = event.target.value;

        setError(validations({ ...form, [property]: value }))
        setForm({ 
            ...form, 
            [property]: value 
        })
    }

    const handlerTypeOne = (event) => {
        let value = event.target.value;
        let valueCopy;

        if(value !== "Select"){
            setHandlerButton(false)

            if(form.type.length >= 2) {
                valueCopy = form.type[1]
                
                setForm({ 
                    ...form, 
                    type: [value, valueCopy]
                })
            } else {

                setForm({ 
                    ...form, 
                    type: [value]
                })
            }
        }
        
    }

    const handlerTypeTwo = (event) => {
        let value = event.target.value;

        if(value !== "Select"){
            setHandlerButton(false)

            if(form.type.length >= 2) form.type.pop()

            setForm({ 
                ...form, 
                type: [...form.type, value] 
            })
        }
        
    }

    const resetSelect = () => {
        setHandlerButton(true)
        document.getElementById("type").selectedIndex = 0;
        document.getElementById("type2").selectedIndex = 0;
    }

    
    
    const handlerSubmit = (event) => {
        event.preventDefault();

        if(!Object.keys(error).length){

            axios.post('http://localhost:3001/pokemons', form)
            .then(res => {
                let msg = res.data.message
                window.alert(msg)
            })
            .then(res => {
                setForm({
                    name: "",
                    image: "",
                    life: 0,
                    attack: 0,
                    defense: 0,
                    speed: 0,
                    height: 0,
                    weight: 0,
                    type: []
                })
                resetSelect();
                

            }).catch(err => window.alert("This name already exist"))
        }
        

    }

    return (
        <div className={style.divConten}> 

            <h2>create your pokemon</h2>
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
                    <input type="number" name="life" value={form.life} onChange={handlerChange} placeholder='0'/>
                    <label className={style.warning}>{error.life}</label>
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Attack: </label>
                    <input type="number" name="attack" value={form.attack} onChange={handlerChange} placeholder='0'/>
                    <label className={style.warning}>{error.attack}</label>
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Defense: </label>
                    <input type="number" name="defense" value={form.defense} onChange={handlerChange} placeholder='0'/>
                    <label className={style.warning}>{error.defense}</label>
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Speed: </label>
                    <input type="number" name="speed" value={form.speed} onChange={handlerChange} placeholder='0'/>
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Height: </label>
                    <input type="number" name="height" value={form.height} onChange={handlerChange} placeholder='0'/>
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Weight: </label>
                    <input type="number" name="weight" value={form.weight} onChange={handlerChange} placeholder='0'/>
                </div>

                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Type 1: </label>
                    <select name="type" id='type' onClick={handlerTypeOne}>
                        {
                            allTypes?.map(type => {
                                return(
                                    <option key={type} value={type}>{type}</option>
                                )
                            })
                        }
                    </select>

                </div>
                
                <div className={style.cadaDivForm}>
                    <label className={style.namesForm}>Type 2: </label>
                    <select name="type2" id='type2' onClick={handlerTypeTwo}>
                        {
                            allTypes?.map(type => {
                                return(
                                    <option key={type} value={type}>{type}</option>
                                )
                            })
                        }
                    </select>

                </div>

                <button type="submit" id="buttonSubmit" disabled={handlerButton}>Submit</button>
            </form>
        </div>



    )
}

export default Form;