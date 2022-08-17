const Router = require('express').Router()
const controller = require('../controllers/RecipesController')
const middleware = require('../middleware')

Router.get('/all', controller.FindAllRecipes)
Router.get('/:category_id', controller.FindByCategory)
Router.get('/view/:recipe_id', controller.FindOneRecipe)
Router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateRecipe
)
Router.delete(
  '/:recipe_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.DeleteRecipe
)
Router.put(
  '/:recipe_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateRecipe
)
module.exports = Router
