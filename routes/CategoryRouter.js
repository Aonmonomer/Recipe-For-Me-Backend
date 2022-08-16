const Router = require('express').Router()
const controller = require('../controllers/CategoryController')

Router.post('/create', controller.CreateCategory)
Router.get('/all', controller.ListCategories)

module.exports = Router
