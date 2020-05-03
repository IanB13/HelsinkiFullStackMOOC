const blogRouter = require('express').Router()
const Blog = require(`../models/Blog`) //gets moongoose model
const logger = require('../utils/logger')

blogRouter.get('/', async (request, response) => {
    const blogs = await  Blog.find({})
        response.json(blogs)
        logger.info(`/api/blogs sent`)
    
  })



blogRouter.post('/', async (request, response) => {
    const blog =  new Blog(request.body)
    if( !(request.body.title || request.body.url)){
      response.status(400).json({ 
        error: 'content missing'
      })
      logger.info('bad request')
    }
    else{
    const blogSave = await blog.save()
    response.status(201).json(blogSave)
    logger.info(`${blogSave}`)
    }
  })
  
module.exports = blogRouter