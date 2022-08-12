const { Recipe, User, Category } = require('../models')

const findAllRecipes = async (req, res) => {
  let allRecipes = await Recipe.findAll()
  res.send(allRecipes)
}

const createRecipe = async (req, res) => {
  let newRecipeBody = {
    ...req.body
  }
  let newRecipe = await Recipe.create(newRecipeBody)
  res.send(newRecipe)
}

module.exports = {
  findAllRecipes,
  createRecipe
}
