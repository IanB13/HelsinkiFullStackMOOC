const userRouter = require('express').Router()
const User = require(`../models/User`) //gets moongoose model
const logger = require('../utils/logger')
const bcrypt = require('bcryptjs')

userRouter.post('/', async (request, response) => {
    const body = request.body
    logger.info(body)
    const saltRounds = 12
    if(request.body.password && request.body.password.length >=3 ){

    const passwordHash = await bcrypt.hash(body.password, saltRounds)
  
    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    })
  
    const savedUser = await user.save()
  
    response.status(201).json(savedUser)
  }
  else{
    return response.status(400).send({ error: 'invalid password' })
  }
  })

userRouter.get('/', async (request, response) => {
  const user = await  User.find({})
  response.json(user)
  logger.info(`/api/user sent`)
})


module.exports = userRouter