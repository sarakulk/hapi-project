'use strict';
const mongoose = require('mongoose')
const config = require('../config')

module.exports = {

    mongoDBConnection: async (req,h) => {
        await mongoose.connect(config['development'].mongoDB.mongoURL, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
            if (err) {
                return err;
            }
            return console.log('Connected to MongoDB successfully..');
        });
    },

}