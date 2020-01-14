'use strict';


const existingUser = require('./ExistingUserCheck')
const services = require('../services')

const login = async (req,reply) => {
    const username = await req.payload.userName;
    const password = await req.payload.password;

    const userChecked = await existingUser(username)

    if (userChecked[0]) {
        let decryptedPass = await services.encrypt.decrypt(userChecked[1].password)

        if (decryptedPass === password) {
            return 'Login Successfull'
        }
        else {
            return 'Password does not match'
        }

    }

    
}

module.exports = login