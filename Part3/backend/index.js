const express = require('express');
const app =express();

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  },
  {
    id: 4,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]


app.get('/', (req,res) =>{
  res.send('<h1 style=" color: orange;"> Landing</h1>')
} )

app.get('/notes', (req, res) => {
  res.json(notes)
})

app.get('/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find(note => note.id === id)
  if(note){
    response.status(200).json(note);
  }
  else{
    response.status(404).end();
  }
 

})

app.delete('/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

app.post('/notes', (request, response) => {
  const note = request.body
  console.log("Listining to post")
  console.log(request)
  console.log(response)
  console.log(`note is ${request.body}`)

  response.json({"fraud" : 23})
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})