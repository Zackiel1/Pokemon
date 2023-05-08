const { Pokemon, Type } = require('../db');
const getPokeByName = require('./getPokeByName');
const { apiTypes } = require('./getTypes');

const createPoke = async (name, image, life, attack, defense, speed, height, weight, type) => {
  
   name = name.toLowerCase();
   
   const verifyName = await getPokeByName(name); //---- verifica que no exisa el nombre en la api

   let count = await Type.count();
   //------------------------------ Si no hay datos en la tabla Type la llena con la api
   await apiTypes(count); 
   
   
    //-------------- crear el personaje

   if(verifyName.length === 0){ 
      
      let typeId = [];

      const pokemon = await Pokemon.create({ name, image, life, attack, defense, speed, height, weight, type});

      typeId[0] = await Type.findOne({ where: { name: type[0] } }).then(type => type.id);

      //---Aqui verifico si me pasaron 2do type;
      if(type[1]) typeId[1] = await Type.findOne({ where: { name: type[1] } }).then(type => type.id);
      
      await pokemon.addType(typeId)
      
      return { message: "Created pokemon" }
   } else {
      throw new Error();
   }

   
}

module.exports = createPoke;