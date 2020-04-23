require('dotenv').config() // .env to keep password to mongodb secret
const http = require('http') //why do we have this?
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger') //logger for adding logging frameworks in the future

const config = require('./utils/config') //handles .env configuration

const Blog = require('./models/Blog')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true,useUnifiedTopology: true  }).then(success =>{
  logger.info(`connected at ${config.MONGODB_URI}`)
}
).catch( err =>{
  logger.error(err)
})


app.use(cors())
app.use(bodyParser.json())
const blogRouter = require('./controllers/blogs')
app.use('/api/blogs', blogRouter)



app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})