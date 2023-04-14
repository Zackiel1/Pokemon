const { Pokemon, Type } = require('../db');
const axios = require('axios');
const getPokeByName = require('./getPokeByName');
const { apiTypes } = require('./getTypes');

const createPoke = async (name, image, hp, attack, defense, speed, height, weight, type) => {

   name = name.toLowerCase();

   const verifyName = await getPokeByName(name); //---- verifica que no exisa el nombre en la api

   let count = await Type.count();
    //------------------------------ Si no hay datos en la tabla Type la llena con la api
   await apiTypes(count); 
   
    //-------------- crear el personaje
   if(verifyName.length === 0){ 
      const pokemon = await Pokemon.create({ name, image, hp, attack, defense, speed, height, weight, type });

      const addType = await Type.findOne({ where: { name: type } });
      await pokemon.addType(addType);

      return { message: "Created pokemon" }
   } else {
      throw Error();
   }
           
}

module.exports = createPoke;