'use strict';
const controller = require('../../controller')
const Joi = require('joi')

module.exports = [
    {
        method: 'POST',
        path: '/register',
        handler: controller.userController.addUser,
        options: {
            validate: {
                payload: {
                    userName: Joi.string().min(3).max(10).required(),
                    password: Joi.string().alphanum().required()
                }
            }
        }
    },

    {
        method: 'GET',
        path: '/getUsers',
        handler: controller.userController.getUser
    }
]