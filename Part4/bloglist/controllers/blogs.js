const blogRouter = require('express').Router()
const Blog = require(`../models/Blog`) //gets moongoose model
const logger = require('../utils/logger')

blogRouter.get('/', (request, response) => {
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
        logger.info(`${result}`)
      })
  })
  
module.exports = blogRouter