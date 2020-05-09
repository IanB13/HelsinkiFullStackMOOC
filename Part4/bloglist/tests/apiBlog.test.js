const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')
const Blog = require('../models/Blog')
const User = require('../models/User')
const api = supertest(app)

let outsidetoken = null

describe('Blog dnwuie7',  () =>{
beforeAll(async() =>{
  const user = await api.post('/api/login')
  .send({
    "username":"coolBoi",
    "password":"hunter2"
    }) 
  expect(user.body.token).toBeDefined()
  const Auth = `bearer ${user.body.token}`  
  outsidetoken = Auth
  }
)

beforeEach(async () =>{
  await Blog.deleteMany({})
  .set("Authorization",outsidetoken)

  let blogObject = new Blog()
  for(blog of blogList){
    blogObject = new Blog(blog)
    await blogObject.save()

  }
})

test('notes123 are returned as json', async () => {

  const blog = await api.get('/api/blogs')
    .set("Authorization",outsidetoken)
    .expect(200)
    .expect('Content-Type', /application\/json/)

    expect(blog.body.length).toBe(6) 
})

test('unique identifier is set to be id',async () => {
  const user = await api.post('/api/login')
  .send({
    "username":"coolBoi",
    "password":"hunter2"
    }) 
  expect(user.body.token).toBeDefined()
  const Auth = `bearer ${user.body.token}` 

  const blog = await api.get('/api/blogs')
  .set("Authorization",Auth)
  expect(blog.body[0].id).toBeDefined()
})

test('HTTP POST request to the /api/blogs url successfully creates a new blog post', async ()=>{
  await api.post('/api/blogs')
  .set("Authorization",outsidetoken)
  .send(newBlog)
  .expect(201)
  .expect('Content-Type', /application\/json/)

  const blogList = await api.get('/api/blogs')
  .set("Authorization",outsidetoken)
  expect(blogList.body[6].title).toBe("Whale Facts")
  expect(blogList.body.length).toBe(7)

})

test('If likes are undefined in database a likes value of 0 is created',async ()=>{
  const blog = await api.get('/api/blogs')
  .set("Authorization",outsidetoken)
  expect(blog.body[1].likes).toBe(0)

})

test('If title and author are undefined return 400 do not save',async ()=>{
  await api.post('/api/blogs')
  .set("Authorization",outsidetoken)
  .send(badBlog)
  .expect(400)
})

test('Delete123 Blog' , async ()=>{
  await api.delete('/api/blogs/5a422aa71b54a666234d17f8')
  .set("Authorization",outsidetoken)
  .expect(204)

  const blog = await api.get('/api/blogs')
  .set("Authorization",outsidetoken)
  expect(blog.body.length).toBe(5)

})


test('update blog likes' , async ()=>{
  await api.put('/api/blogs/5a422b3a1b54a676234d17f9')
  .set("Authorization",outsidetoken)
  .send(updateBlog)
  .expect(200)

  const blog = await api.get('/api/blogs')
  expect(blog.body[2].likes).toBe(50)
})

afterAll(() => {
  //mongoose.connection.close()
})



///blog constant, used to initalize database before each test
const blogList =
  [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7, __v: 0
    },
    {
      _id: "5a422aa71b54a666234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
       __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12, __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10, __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0, __v: 0
    },
    {
      _id: "5a422bc66b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2, __v: 0
    }
  ]

const newBlog =     {
  _id: "3a4c2bc61bd4a67b234d17fc",
  title: "Whale Facts",
  author: "Allex Rumbles",
  url: "http://www.whalefacts.com",
  likes: 20, __v: 0
}

const updateBlog=     {
  _id: "5c422b3a1b54a676234d17f9",
  title: "15 ways to reduce strings number 5 will suprise you!",
  author: "Edsger W. Dijkstra",
  url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
  likes: 50, __v: 0
}




const badBlog = {
  author: "Big Joe",
  likes: 10, __v: 0
}

}
)
