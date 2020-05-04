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
    })

})

const correctUser = {
    "user":"coolBoi",
    "name":"Joe Hancock",
    "password":"hunter2"

}
