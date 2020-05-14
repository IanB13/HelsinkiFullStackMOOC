import React,{useState} from 'react'
import blogService from '../services/blogs'

const NewBlogForm = ({user,triggerBlogReload,setMessage}) =>{
    const [blogVisible, setBlogVisible] = useState(false)
    const [title,setTitle ] = useState("")
    const [author,setAuthor ] = useState("")
    const [URL,setURL ] = useState("")

    const hideWhenVisible = { display: blogVisible ? 'none' : '' }
    const showWhenVisible = { display: blogVisible ? '' : 'none' }

    const handleFormSubmission = async (event)=>{
        event.preventDefault()
        const blog = { title,author,URL,user}
        let response = null;
        try{ response = await blogService.create(blog)}
        catch(e){setMessage("bad request") 
        console.log(response)
        response = null
      } 
        
      console.log(response)
      if(response){
      setMessage(`a new blog created`)
      setTitle("")
      setAuthor("")
      setURL("")
      triggerBlogReload(blog)
      
      }
    }
    const toggleVisability =()=>{
      setBlogVisible(!blogVisible)
    }
    
return(
  <>
  <div style={hideWhenVisible}>
  <button onClick ={toggleVisability}>new blog</button>
  </div>
  <div style={showWhenVisible} >
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
    <button onClick={toggleVisability}>
      Cancel
    </button>
  </div>
  </>
)
}

export default NewBlogForm