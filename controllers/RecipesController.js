const { Recipe } = require('../models')

const FindAllRecipes = async (req, res) => {
  let allRecipes = await Recipe.findAll()
  res.send(allRecipes)
}

const FindByCategory = async (req, res) => {
  let catId = parseInt(req.params.category_id)
  console.log(req.params)
  let recipeByCategory = await Recipe.findAll({
    where: { categoryId: catId }
  })

  res.send(recipeByCategory)
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

const UpdateRecipe = async (req, res) => {
  let recipeId = parseInt(req.params.recipe_id)
  let updatedRecipe = await Recipe.update(req.body, {
    where: { id: recipeId },
    returning: true
  })
  res.send(updatedRecipe)
}

module.exports = {
  FindAllRecipes,
  FindByCategory,
  CreateRecipe,
  DeleteRecipe,
  UpdateRecipe
}
