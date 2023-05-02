const createPoke = require('../controllers/createPoke');
const getAllPoke = require('../controllers/getAllPoke');
const getPokeById = require('../controllers/getPokeById');
const {getTypes} = require('../controllers/getTypes');
const getPokeByName = require('../controllers/getPokeByName');
const getPokeByBD = require('../controllers/getPokeByBD');

const getPokeHandlers = async (req, res) => {
    let { name } = req.query;
    let pokemons;
    let pokemonsBD;

    try {
        
        if (name) {
           
          pokemons = await getPokeByName(name)
            
          if(pokemons.length === 0){
            pokemonsBD = await getPokeByBD(name);
            return res.status(200).json(pokemonsBD);
          }
            
            res.status(200).json(pokemons);
            return
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllPokeHandlers = async (req, res) => {


    try {
       const allPokemon = await getAllPoke();
    
        res.status(200).json(allPokemon);
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
            life,
            attack,
            defense,
            speed,
            height,
            weight,
            type } = req.body;

        const newPokemon = await createPoke(name, image, life, attack, defense, speed, height, weight, type);
        
        res.status(201).json(newPokemon)
    } catch (error) {
        res.status(400).json({error: "This name already exists"})
    }
}

 
const getIdHandlers = async (req, res) => {
    const { idPokemon } = req.params;
    const source = isNaN(idPokemon) ? "bdd" : "api";

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
    getAllPokeHandlers
}