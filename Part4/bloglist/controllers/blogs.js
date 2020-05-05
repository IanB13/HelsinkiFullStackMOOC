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

blogRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).json({"delete":"delete"})
}) 


blogRouter.put('/:id', async (request, response) => {
  const body = request.body

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }

const updatedBlog =  await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    response.status(200).json(updatedBlog.toJSON())

})

module.exports = blogRouter