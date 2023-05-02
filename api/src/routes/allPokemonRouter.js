const { Router } = require('express');
const { getAllPokeHandlers } = require('../handlers/pokeHandlers');

const allPokemonRouter = Router();

allPokemonRouter.get('/', getAllPokeHandlers);

module.exports = allPokemonRouter;