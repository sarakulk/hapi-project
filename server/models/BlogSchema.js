'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    content: String
});


module.exports = blogSchema