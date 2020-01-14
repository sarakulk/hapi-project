'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const userSchema = new Schema({
        userName: String,
        password: String
});


module.exports = userSchema
