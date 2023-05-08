const axios = require('axios');
const { Type } = require('../db');


const getTypes = async () => {

    let count = await Type.count();
    //------------------------------ Si no hay datos en la tabla la llena con la apiType
    await apiTypes(count);


    let allType = await Type.findAll();
    allType = allType.map(t => {
        return t.dataValues.name
    })        
    
    return allType;
}

//---- es una funcion que se encaragr de llenar la table Type si no hay ningun valor dentro
const apiTypes = async (count) => { 
    if(count === 0){
        await axios.get('https://pokeapi.co/api/v2/type')
        .then(async response => {
            const types = response.data.results
            
            types.map(async t => {
                await Type.findOrCreate({where: {name: t.name}})
            })                
        })
    }
}


module.exports = { getTypes, apiTypes };