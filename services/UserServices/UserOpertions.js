'use strict';

const mongoose = require('mongoose')
const schema = require('../../models')
const encryptPassword = require('../Encryption/Encrypt')


const create = async (req) => {
	const userModel = mongoose.model('User', await schema.userSchema)

	let encryptedPass = await encryptPassword.encrypt(req.payload.password)
	req.payload.password = encryptedPass

	var user = new userModel(req.payload)

	await user.save((err) => {
		if (err) {
			console.log(err)
			return err
		}
		return true
	});	

}

const fetch = async () => {
	const userModel = await mongoose.model('User', await schema.userSchema)

	var results = await userModel.find((err, result) => {
		if (err) {
			return err
		}
	})
	console.log(results)
	return results
}

module.exports = {create,fetch}