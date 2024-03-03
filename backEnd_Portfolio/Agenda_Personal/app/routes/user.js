const express = require('express')
const Router = express.Router();
const {loadLoginPage } = require('../controllers/user')

Router.get('/login', loadLoginPage)


module.exports = Router;