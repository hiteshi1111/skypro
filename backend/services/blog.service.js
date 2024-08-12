const cloudinary = require('cloudinary').v2
const Blogs = require("../schemas/blogs.schema");

let service = {};
service.getBlogs = getBlogs;
service.createBlog = createBlog

// get languages
async function getBlogs(data1){
    try {
        const data = await Blogs.find()
        return data
    } catch (err) {
        return Promise.reject({error: 'Unable to get Blogs. Try again later!'});
    }
}

async function createBlog(body, file) {
    try {
        const cloudData = await cloudinary.uploader.upload(file.path)
        const imageUrl = cloudData.secure_url
        if (file) {
            body.image = imageUrl
        }
        const findHandle = await Blogs.findOne({ handle: body.handle})
        if(!findHandle) {
           const newBlog = new Blogs(body)
           const savedBlog = await newBlog.save()
           return savedBlog
        } else {
            return "Already exist"
        }
    } catch (error) {
        return Promise.reject({error: 'Unable to get Blogs. Try again later!'});
    }
}

module.exports = service;