const blogRouter = require('express').Router()
const Blog = require(`../models/Blog`) //gets moongoose model

blogRouter.get('/api/blogs', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
        logger.info(`/api/blogs sent`)
      })
  })



blogRouter.post('/', (request, response) => {
    const blog = new Blog(request.body)
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
        console.log(`${result}`)
      })
  })
  
module.exports = blogRouter