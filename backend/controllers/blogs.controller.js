const express = require('express');
const router = express.Router();
const BlogService = require('../services/blog.service');
const cloudinary = require('cloudinary').v2

router.get("/getblogs", (req,res) => {
    const data1 = req.query.id
    BlogService.getBlogs(data1).then((response) => {
        res.status(200).send(response)
    }).catch((error) => {
        res.status(500).send({ error: 'Something went wrong. Try again later!' })
    })
})

router.post('/addblogs', (req,res) => {
    const data = req.file
    BlogService.createBlog(req.body, req.file).then((response) => {
        res.status(200).send(response)
    }).catch((error) => {
        res.status(500).send({ error: 'Something went wrong. Try again later!' })
    })
})

module.exports = router;