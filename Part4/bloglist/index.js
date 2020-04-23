// .env to keep password to mongodb secret
require('dotenv').config()
//why do we have this
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
//logger
const logger = require('./utils/logger')


// mongoose defined schema
const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})
// declaring mongoose schema
const Blog = mongoose.model('Blog', blogSchema)

// gets mongo password from the .env file
const mongoUrl = process.env.mongoDB_URL;

mongoose.connect(mongoUrl, { useNewUrlParser: true,useUnifiedTopology: true  }).then(success =>{
  logger.info(`connected at ${mongoUrl}`)
}
).catch( err =>{
  logger.error(err)
})

app.use(cors())
app.use(bodyParser.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
      logger.info(`/api/blogs sent`)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
      logger.info(`${result}`)
    })
})

const PORT = 3003
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})