const express = require('express')
const routes = express.Router()
const indexController = require('../controllers/index.controller')



routes.get('/', indexController.indexController)
routes.get('/register', indexController.registerController)
routes.get('/update', indexController.updateController)
routes.get('/find', indexController.findController)
routes.get('/delete', indexController.deleteController)


module.exports = routes