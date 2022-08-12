const Router = require('express').Router()
const controller = require('../controllers/RecipesController')

Router.get('/all', controller.FindAllRecipes)
Router.post('/create', controller.CreateRecipe)
Router.delete('/:recipe_id', controller.DeleteRecipe)
module.exports = Router
