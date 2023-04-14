/** const { postPokeHandlers, getPokeHandlers, getIdHandlers, getTypesHandler} = require('../handlers/pokeHandlers')
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//---------------ojo el controller se conecta con la api y bd

router.get('/pokemons', getPokeHandlers);

router.get('/:idPokemon', getIdHandlers)

router.post('/pokemons', postPokeHandlers);

router.get('/types', getTypesHandler);


module.exports = router;

*/

const { Router } = require('express');
const pokemonRouter = require('./pokemonRouter');
const typeRouter = require('./typeRouter');

const mainRouter = Router();

mainRouter.use('/pokemons', pokemonRouter);
mainRouter.use('/types', typeRouter);

module.exports = mainRouter;
