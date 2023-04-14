const axios = require('axios');
const { Pokemon, Type } = require('../db');


const getPokeById = async (idPokemon, source) => {

    if(idPokemon > 1010) throw Error('Id does not exist');

    let poke = source === "api" ?  //-------------verifica si el id es de la api o de la bdd;

        //-----------busca id de la api
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then(response => {
            const atributo = response.data;
            return {
                id: atributo.id,
                name: atributo.name,
                image: atributo.sprites.other.dream_world.front_default,
                hp: atributo.stats[0].base_stat,
                attack: atributo.stats[1].base_stat,
                defense: atributo.stats[2].base_stat,
                speed: atributo.stats[5].base_stat,
                height: atributo.height,
                weight: atributo.weight,
                type: atributo.types[0].type.name
            }
            
          })

        //----------- busca id de la bdd  
        : await Pokemon.findByPk(idPokemon).catch(error => {
            throw Error("Id does not exist")
        })

    return poke;    
}

module.exports = getPokeById;
