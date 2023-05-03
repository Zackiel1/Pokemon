const { Router } = require('express');
const pokemonRouter = require('./pokemonRouter');
const typeRouter = require('./typeRouter');
const allPokemonRouter = require('./allPokemonRouter');

const mainRouter = Router();

mainRouter.use('/pokemons', pokemonRouter);
mainRouter.use('/types', typeRouter);
mainRouter.use('/allPokemon', allPokemonRouter);

module.exports = mainRouter;
