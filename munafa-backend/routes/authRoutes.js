const Router = require('express').Router();
const UserController = require('../controllers/userController')

Router.get('/',UserController.userList)
Router.post('/',UserController.createUser)



module.exports = Router;