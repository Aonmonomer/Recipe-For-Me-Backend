const Router = require('express').Router()
const controller = require('../controllers/RecipesController')

Router.get('/all', controller.FindAllRecipes)
Router.get('/:category_id', controller.FindByCategory)
Router.get('/view/:recipe_id', controller.FindOneRecipe)
Router.post('/create', controller.CreateRecipe)
Router.delete('/:recipe_id', controller.DeleteRecipe)
Router.put('/:recipe_id', controller.UpdateRecipe)
module.exports = Router
