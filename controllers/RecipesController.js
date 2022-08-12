const { Recipe, User, Category } = require('../models')

const FindAllRecipes = async (req, res) => {
  let allRecipes = await Recipe.findAll()
  res.send(allRecipes)
}

const CreateRecipe = async (req, res) => {
  let newRecipeBody = {
    ...req.body
  }
  let newRecipe = await Recipe.create(newRecipeBody)
  res.send(newRecipe)
}

const DeleteRecipe = async (req, res) => {
  let recipeId = parseInt(req.params.recipe_id)
  await Recipe.destroy({
    where: { id: recipeId }
  })
  res.send({ message: `You deleted the recipe with id ${recipeId}` })
}
module.exports = {
  FindAllRecipes,
  CreateRecipe,
  DeleteRecipe
}
