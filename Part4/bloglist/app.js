const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')
const mongoose = require('mongoose')
const logger = require('./utils/logger') //logger for adding logging frameworks in the future
const config = require('./utils/config') //handles .env configuration

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true,useUnifiedTopology: true  }).then(success =>{
  logger.info(`connected at ${config.MONGODB_URI}`)
}
).catch( err =>{
  logger.error(err)
})

app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)

module.exports = app
