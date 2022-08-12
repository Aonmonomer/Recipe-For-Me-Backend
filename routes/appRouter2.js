const Router = require('express').Router()
const RecipeRouter = require('./RecipesRouter')

Router.use('/recipes', RecipeRouter)

module.exports = Router
