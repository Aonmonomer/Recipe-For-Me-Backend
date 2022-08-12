const Router = require('express').Router()
const controller = require('../controllers/UsersController')
// // You Do
// // Implement Crud Operations For Comments
// // You Do
Router.get('/view/:user_id', controller.GetUserDetails)
Router.post('/create', controller.CreateUser)
Router.put('/:user_id', controller.UpdateUser)
Router.delete('/:user_id', controller.DeleteUser)

module.exports = Router
