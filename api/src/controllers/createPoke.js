const { Pokemon, Type } = require('../db');
const getPokeByName = require('./getPokeByName');
const { apiTypes } = require('./getTypes');

const createPoke = async (name, image, life, attack, defense, speed, height, weight, type) => {

   name = name.toLowerCase();

   const verifyName = await getPokeByName(name); //---- verifica que no exisa el nombre en la api

   let count = await Type.count();
    //------------------------------ Si no hay datos en la tabla Type la llena con la api
   await apiTypes(count); 
   console.log(verifyName.length);
    //-------------- crear el personaje

   if(verifyName.length === 0){ 
      
      const pokemon = await Pokemon.create({ name, image, life, attack, defense, speed, height, weight, type});
      const typeId = await Type.findOne({ where: { name: type } }).then(type => type.id);

      
      await pokemon.addType(typeId)
      
      return { message: "Created pokemon" }
   } else {
      throw Error();
   }

   
}

module.exports = createPoke;