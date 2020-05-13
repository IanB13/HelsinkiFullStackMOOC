const blogRouter = require('express').Router()
const Blog = require(`../models/Blog`) //gets moongoose model
const User = require('../models/User')
const logger = require('../utils/logger')
const jwt = require('jsonwebtoken')


blogRouter.get('/', async (request, response) => {
    const blogs = await  Blog.find({})
        response.json(blogs)
        logger.info(`/api/blogs sent`)
    
  })

blogRouter.post('/', async (request, response) => {

    const body = request.body
    const token = request.token
    //const decodedToken = jwt.verify(token, process.env.SECRET)
    let decodedToken = null
    console.log("token is",token)
    console.log(token)
    try{
      decodedToken = jwt.verify(token, process.env.SECRET)
      console.log(decodedToken)
    }
    catch{
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    if (!token || !decodedToken.id) {
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
    console.log("user data is")
    console.log(userData)
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

    const saveBlogtoUser = {
      title: body.title,
      author: body.author,
      url: body.url,
      id:blogSave._id
    }
    userData.blogs = userData.blogs.concat(saveBlogtoUser)
    console.log( userData.blogs)
    await userData.save()
    response.status(201).json(blogSave)
    logger.info(`${blogSave}`)
    }
  })

blogRouter.delete('/:id', async (request, response) => {
  console.log("delete request")
  const token = request.token
  console.log('request token is',request.token)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  console.log("user attempting to delete token:")
  console.log(decodedToken)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const blogToDelete =  await Blog.findById(request.params.id)
  if(!blogToDelete){
    return response.status(404).json({ error: 'blog id not found' })
  }
  console.log("blog to be deleted")
  console.log(blogToDelete)
  if(blogToDelete.user.id.toString() === decodedToken.id.toString()){
    console.log("delete allowed")
    await Blog.findByIdAndDelete(request.params.id)
    return response.status(204).send()
  }
  else{
    return response.status(400).json({ error: 'blog created by other user' })
  }
  
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
