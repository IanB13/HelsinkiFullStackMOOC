const blogRouter = require('express').Router()
const Blog = require(`../models/Blog`) //gets moongoose model
const User = require('../models/User')
const logger = require('../utils/logger')
const jwt = require('jsonwebtoken')

const getTokenFrom = (request) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

blogRouter.get('/', async (request, response) => {
    const blogs = await  Blog.find({})
        response.json(blogs)
        logger.info(`/api/blogs sent`)
    
  })

blogRouter.post('/', async (request, response) => {

    const body = request.body
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
   
    if (!token || !decodedToken.id) {
      console.log("here")
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    if( !(body.title || body.url)){
      response.status(400).json({ 
        error: 'content missing'
      })
      logger.info('bad request')
    }
    else{
    const userData = await User.findById(decodedToken.id)
    const user = {
      username:userData.username,
      name: userData.name,
      id: userData._id
    }
    const blog =  new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user
    })
    const blogSave = await blog.save()
    userData.blogs = userData.blogs.concat(blogSave._id)
    await userData.save()
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