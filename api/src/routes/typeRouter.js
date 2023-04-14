const { Router } = require('express');
const { getTypesHandler } = require('../handlers/pokeHandlers');

const typeRouter = Router();

typeRouter.get('/', getTypesHandler);

module.exports = typeRouter;