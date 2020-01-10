const Services = require('../services')

const userCheck = require('./ExistingUserCheck')

module.exports = {
    addUser: async (req, h) => {

        const user = Services.userOperations

        const userChecked = await userCheck(req.payload.userName)

        try {

            if (!await userChecked[0]) {
                if (user.create(req)) {
                    return 'User has been Added'
                }
                return 'Problem while creating user'
            }

        } catch (err) {
            return err
        }
       

        return 'username is already existed..'
    },

    getUser: async (req, h) => {
        const user = Services.userOperations

        var result = await user.fetch()

        console.log(result)
        
        if (result == null) {
            return 'Value error'
        }
        else
            return result
    }
}
