const Blog = require('../services')

module.exports = {

    addBlog: async (req, h) => {

        const blog = Blog.blogOperations
        if (blog.createBlog(req)) {
            return 'Blog Content has been created'
        }
        else {
            return 'Problem occered while creating Blog'
        }
    },

    getBlog: async (req, h) => {
        
        const blog = Blog.blogOperations
        var result = await blog.fetchBlog()
        
        if (result == null) {
            return 'Value error'
        }
        else
            return result
    }
}
