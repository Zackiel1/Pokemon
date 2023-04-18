const createPoke = require('../controllers/createPoke');
const getAllPoke = require('../controllers/getAllPoke');
const getPokeById = require('../controllers/getPokeByid');
const {getTypes} = require('../controllers/getTypes');
const getPokeByName = require('../controllers/getPokeByName');

const getPokeHandlers = async (req, res) => {
    const { name } = req.query;
    let pokemons;

    try {

        if (name) {
            pokemons = await getPokeByName(name);
            if(pokemons.length === 0) throw Error('Pokemon no existe');
            res.status(200).json(pokemons);
        } else {
            pokemons = await getAllPoke();
            res.status(200).json(pokemons);
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//--------------- holaaaaaaaaa 
const postPokeHandlers = async (req, res) => {
    try {
        const {
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            type } = req.body;

        const newPokemon = await createPoke(name, image, hp, attack, defense, speed, height, weight, type);
        res.status(201).json(newPokemon)
    } catch (error) {
        res.status(400).json({ error: "this name already exists" })
    }
}

 
const getIdHandlers = async (req, res) => {
    const { idPokemon } = req.params;
    const source = isNaN(idPokemon) ? "bdd" : "api";

    console.log(source)
    try {
        const pokemon = await getPokeById(idPokemon, source);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const getTypesHandler = async (req, res) => {
    try {
        const types = await getTypes();
        res.status(200).json(types)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    postPokeHandlers,
    getPokeHandlers,
    getIdHandlers,
    getTypesHandler,
}