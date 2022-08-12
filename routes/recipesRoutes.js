const Router = require('express').Router()
const controller = require('../controllers/RecipesController')

Router.get('/all', controller.findAllRecipes)
Router.post('/create', controller.createRecipe)

module.exports = Router
