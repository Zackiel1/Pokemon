const { postPokeHandlers, getPokeHandlers, getIdHandlers } = require('../handlers/pokeHandlers')
const { Router } = require('express');

const pokemonRouter = Router();

pokemonRouter.get('/', getPokeHandlers);
pokemonRouter.get('/:idPokemon', getIdHandlers);
pokemonRouter.post('/', postPokeHandlers);

module.exports = pokemonRouter;