const { Pokemon, Type, PokemonType } = require('../db');

const getPokeByBD = async (name) => {
    //busco el pokemon por el name en DB
    const project = await Pokemon.findOne({ where: { name: name } });
    
    //capturo el objeto de la busqueda anterior
    const atributo = project.dataValues;
    
    //busco los types que tenga la table pokemonType que coincidan con el id que trae el pokemon
    const typesDb = await PokemonType.findAll({ where: { pokemonId: atributo.id } });

    let types = typesDb.map(t => t.dataValues.typeId);
    
    
    const typeNameOne = await Type.findOne({ where: { id: types[0] } });
    const typeNameTwo = types[1] && await Type.findOne({ where: { id: types[1] } });
   

    let nameOfType = [typeNameOne.dataValues.name];
    typeNameTwo && nameOfType.push(typeNameTwo.dataValues.name)
    
    atributo["type"] = nameOfType;
    
    return [atributo]
}

module.exports = getPokeByBD;