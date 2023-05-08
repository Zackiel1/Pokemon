const axios = require('axios');

const getPokeByName = async (name) => {
    let arrayPoke = [];

    await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
    
        let p = response;
        
        arrayPoke.push({
            id: p.data.id,
            name: p.data.name,
            image: p.data.sprites.other.dream_world.front_default,
            life: p.data.stats[0].base_stat,
            attack: p.data.stats[1].base_stat,
            defense: p.data.stats[2].base_stat,
            speed: p.data.stats[5].base_stat,
            height: p.data.height,
            weight: p.data.weight,
            type: p.data.types.map(t => t.type.name)
      })
            
    }).catch(error => error)
    
    return arrayPoke;
    
}

module.exports = getPokeByName;