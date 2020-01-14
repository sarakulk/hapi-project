'use strict';

const controller = require('../../controller')
const Joi = require('joi')

module.exports = [
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