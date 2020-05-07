import React,{useState} from 'react'
import blogService from '../services/blogs'

const NewBlogForm = ({user,triggerBlogReload}) =>{
    const [title,setTitle ] = useState("")
    const [author,setAuthor ] = useState("")
    const [URL,setURL ] = useState("")

    const handleFormSubmission = async (event)=>{
        event.preventDefault()
        const blog = { title,author,URL,user}
        const response = await blogService.create(blog)
        console.log(response)
        setTitle("")
        setAuthor("")
        setURL("")
        triggerBlogReload(blog)
    }
    
return(
    <form onSubmit={handleFormSubmission}>
         <div>
      title
        <input
        type="text"
        value={title}
        name="title"
        onChange={({ target }) => setTitle(target.value)}
      />
    </div>
    <div>
      author
        <input
        type="text"
        value={author}
        name="author"
        onChange={({ target }) => setAuthor(target.value)}
      />
    </div>
    <div>
      URL
        <input
        type="text"
        value={URL}
        name="URL"
        onChange={({ target }) => setURL(target.value)}
      />
    </div>
    <button type="submit">create</button>
    </form>
)
}

export default NewBlogForm