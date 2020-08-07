const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')
const User = require('../models/User')
const api = supertest(app)

describe('User',  () =>{
    beforeAll(async () => {
        await User.deleteMany({})
    })

    test('New user added to database', async () => {
        await api.post('/api/users')
        .send(correctUser)
        .expect(201)
        .expect('Content-Type', /application\/json/)

        const users = await api.get('/api/users')
        expect(users.body[0].username).toBe("coolBoi")
    })

    test('Username needs to be at least 3 characters',async ()=>{
        await api.post('/api/users')
        .send(shortNameUser)
        .expect(400)
    })
    test('Username required',async ()=>{
        await api.post('/api/users')
        .send(noUsername)
        .expect(400)
    })

    test('Password longer than 3 chars',async ()=>{
        await api.post('/api/users')
        .send(shortPassword)
        .expect(400)

    })

    test('Password required',async ()=>{
        await api.post('/api/users')
        .send(noPassword)
        .expect(400)
    })

    afterAll(() => {
        mongoose.connection.close()
      })

})

const correctUser = {
    "username":"coolBoi",
    "name":"Joe Hancock",
    "password":"hunter2"
}
const shortNameUser ={
    "username":"sh",
    "name":"Billy Bob",
    "password":"hunter2"
}
const noUsername ={
    "name":"Billy Bob",
    "password":"hunter2"
}

const noPassword ={
    "username":"CoolBilly",
    "name":"Billy Bob",
}
const shortPassword ={
    "username":"CoolBilly",
    "name":"Billy Bob",
    "password":"h2"
}