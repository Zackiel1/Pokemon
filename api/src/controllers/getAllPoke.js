const axios = require('axios');

//"https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"

const getAllPoke = async () => {

    let arrayPoke = [];

    await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=2&limit=2`)
    .then(async (response) => {
        let resultApi = response.data.results;
        
        let pokemonApi = [];
        resultApi.map((p) => pokemonApi.push(axios.get(p.url))); // Se guarda en pokemonApi cada promesa(pending) de cada pokemon
        

        await Promise.all(pokemonApi)
          .then((pokemons) => {
            arrayPoke = pokemons.map((p) => {
                  return {
                      id: p.data.id,
                      name: p.data.name,
                      image: p.data.sprites.other.dream_world.front_default,
                      hp: p.data.stats[0].base_stat,
                      attack: p.data.stats[1].base_stat,
                      defense: p.data.stats[2].base_stat,
                      speed: p.data.stats[5].base_stat,
                      height: p.data.height,
                      weight: p.data.weight,
                      type: p.data.types[0].type.name
                }
            })       
        }).catch(error => error)
    }).catch(error => error)
    
    return arrayPoke;
}

module.exports = getAllPoke;