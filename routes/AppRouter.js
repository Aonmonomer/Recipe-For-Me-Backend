const Router = require('express').Router()
const RecipeRouter = require('./RecipesRouter')
const UserRouter = require('./UserRouter')

Router.use('/recipes', RecipeRouter)
Router.use('/users', UserRouter)

module.exports = Router
