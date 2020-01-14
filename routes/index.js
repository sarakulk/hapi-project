'use strict';

const controller = require('../controller')
const Joi = require('joi')

const routes = (server) => [
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return 'welcome...';
        }
    },
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
    },
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
    },
    {
        method: 'POST',
        path: '/addBlogContent',
        handler: controller.blogController.addBlog,
        options: {
            validate: {
                payload: {
                    title: Joi.string().min(3).max(100).required(),
                    content: Joi.string().required() 
                     
                }
            }
        }
    },

    {
        method: 'GET',
        path: '/getBlogContent',
        handler: controller.blogController.getBlog
    },
        
]

module.exports = routes;