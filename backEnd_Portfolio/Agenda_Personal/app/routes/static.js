const express = require('express')
const Router = express.Router();
const path = require('path');
const { getLogonJs } = require('../controllers/static')

Router.get('/js/login.js', getLogonJs)

module.exports = Router;