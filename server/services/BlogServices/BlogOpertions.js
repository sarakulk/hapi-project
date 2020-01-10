'use strict';

const mongoose = require('mongoose')
const schema = require('../../models')
const encryptPassword = require('../Encryption/Encrypt')


const createBlog = async (req) => {
	const blogModel = mongoose.model('Blog', await schema.blogSchema)
	var blog = new blogModel(req.payload)

	await blog.save((err) => {
		if (err) {
			console.log(err)
			return err
		}
		return true
	});

}

const fetchBlog = async () => {
	const blogModel = await mongoose.model('Blog', await schema.blogSchema)

	var results = await blogModel.find((err, result) => {
		if (err) {
			return err
		}
	})
	console.log(results)
	return results
}

module.exports = { createBlog, fetchBlog }