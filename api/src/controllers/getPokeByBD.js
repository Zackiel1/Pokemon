const { Pokemon, Type, PokemonType } = require('../db');

const getPokeByBD = async (name) => {
    //busco el pokemon por el name en DB
    const project = await Pokemon.findOne({ where: { name: name } });
    
    //capturo el objeto de la busqueda anterior
    const atributo = project.dataValues;
    //busco los types que tenga la table pokemonType que coincidan con el id que trae el pokemon
    const types = await PokemonType.findOne({ where: { pokemonId: atributo.id } });
    //console.log(types.dataValues.typeId)
    const typeName = await Type.findOne({ where: { id: types.dataValues.typeId } });
    const nameOfType = typeName.dataValues.name;
    atributo["type"] = nameOfType;
    
    return [atributo]
}

module.exports = getPokeByBD;