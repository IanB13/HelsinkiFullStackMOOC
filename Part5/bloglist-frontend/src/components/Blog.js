import React,{useState} from 'react'
import blogServices from '../services/blogs'
const Blog = ({ blog , triggerBlogReload }) => {
 const [blogVisible, setBlogVisible] = useState(false)
 const hideWhenVisible = { display: blogVisible ? 'none' : '' }
 const showWhenVisible = { display: blogVisible ? '' : 'none' }
 const toggleVisability =()=>{
  setBlogVisible(!blogVisible)
}
const like = async ()=>{
  await blogServices.addlike(blog)
  triggerBlogReload(blog)
}

const deleteBlog = async ()=>{
  await blogServices.deleteBlog(blog)
  triggerBlogReload(blog.id)
}

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: 'solid',
  borderWidth: 1,
  marginBottom: 5
}
return(

  <div style = {blogStyle}>
    {blog.title} {blog.author} 
    
    <button style = {hideWhenVisible} onClick ={toggleVisability}>
      view
    </button>
    <div style = {showWhenVisible}>
    {blog.url}<br></br>
    {blog.likes} <button onClick = {like}>like</button><br></br>
    {blog.user.name}<br></br>
    <button onClick = {deleteBlog}> Remove </button>
    <button onClick ={toggleVisability}>hide</button>
    </div>

  </div>

  )
}

export default Blog
