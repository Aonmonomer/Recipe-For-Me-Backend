const { Category } = require('../models')

const ListCategories = async (req, res) => {
  let allCategories = await Category.findAll()
  res.send(allCategories)
}

const CreateCategory = async (req, res) => {
  let newBody = {
    ...req.body
  }
  let newCategory = await Category.create(newBody)
  res.send(newCategory)
}
module.exports = {
  CreateCategory,
  ListCategories
}
