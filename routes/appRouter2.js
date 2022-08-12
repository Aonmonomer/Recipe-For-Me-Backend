const Router = require('express').Router()
const RecipeRouter = require('./recipesRoutes')

Router.use('/recipes', RecipeRouter)

module.exports = Router
