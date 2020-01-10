'use strict';

const controller = require('../../controller')
const Joi = require('joi')

module.exports = [
    {
        method: 'POST',
        path: '/login',
        handler: controller.login,
        options: {
            validate: {
                payload: {
                    userName: Joi.string().min(3).max(10).required(),
                    password: Joi.string().alphanum().required()
                }
            }
        }
    }
]