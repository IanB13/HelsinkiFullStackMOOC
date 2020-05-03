const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')
const Blog = require('../models/Blog')
const api = supertest(app)

describe("API Integration tests",  () =>{
beforeEach(async () =>{
  await Blog.deleteMany({})

  let blogObject = new Blog()
  for(blog of blogList){
    blogObject = new Blog(blog)
    await blogObject.save()

  }
})

test('notes are returned as json', async () => {
  const blog = await api.get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)

    expect(blog.body.length).toBe(6)
})

test('unique identifier is set to be id',async () => {
  const blog = await api.get('/api/blogs')
  expect(blog.body[0].id).toBeDefined()
})

test('HTTP POST request to the /api/blogs url successfully creates a new blog post', async ()=>{
  await api.post('/api/blogs')
  .send(newBlog)
  .expect(201)
  .expect('Content-Type', /application\/json/)

  const blogList = await api.get('/api/blogs')
  expect(blogList.body[6].title).toBe("Whale Facts")
  expect(blogList.body.length).toBe(7)

})

test('If likes are undefined in database a likes value of 0 is created',async ()=>{
  const blog = await api.get('/api/blogs')
  expect(blog.body[1].likes).toBe(0)

})

test('If title and author are undefined return 400 do not save',async ()=>{
  await api.post('/api/blogs')
  .send(badBlog)
  .expect(400)
})


afterAll(() => {
  mongoose.connection.close()
})

}
)


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
      _id: "5a422aa71b54a676234d17f8",
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
      _id: "5a422b891b54a676234d17fa",
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
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2, __v: 0
    }
  ]

const newBlog =     {
  _id: "3a4c2bc61ba4a67b234d17fc",
  title: "Whale Facts",
  author: "Allex Rumbles",
  url: "http://www.whalefacts.com",
  likes: 20, __v: 0
}

const badBlog = {
  author: "Big Joe",
  likes: 10, __v: 0
}
