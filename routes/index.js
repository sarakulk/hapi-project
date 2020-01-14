'use strict';

const controller = require('../controller')
const Joi = require('joi')

var userRoute = require('./userRoutes/user')
var blogRoute = require('./blogRoutes/blog')
var login = require('./loginRoute/login')

module.exports = [].concat(userRoute, blogRoute, login)
