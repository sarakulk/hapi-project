'use strict';

const mongoose = require('mongoose')
var username = 'userName'
const models = require('../models')

const userCheck = async (username) => {
    const userModel = mongoose.model('User', await models.userSchema)
    var result = [true]   //assuming user is already exist

    await userModel.findOne({ "userName": username }, async (err, user) => {
        if (err) {
            return err
        }
        if (user === null) {
            result[0] = false
        }
        else {
            result[1] = user
        }
    })
   
    return result
}

module.exports = userCheck