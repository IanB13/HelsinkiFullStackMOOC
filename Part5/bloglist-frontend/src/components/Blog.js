import React,{ useState } from 'react'
import blogServices from '../services/blogs'
import PropTypes from 'prop-types'

const Blog = ({ blog, triggerBlogReload, user }) => {
  const [blogVisible, setBlogVisible] = useState(false)
  const hideWhenVisible = { display: blogVisible ? 'none' : '' }
  const showWhenVisible = { display: blogVisible ? '' : 'none' }
  const toggleVisability = () => {
    setBlogVisible(!blogVisible)
  }
  const deleteVisable = { display: (blog.user.username === user.username) ? '' : 'none' }

  const like = async () => {
    triggerBlogReload(blog)
    await blogServices.addlike(blog)
  }

  const deleteBlog = async () => {
    triggerBlogReload(blog.id)
    await blogServices.deleteBlog(blog)
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  return (

    <div style={blogStyle} className = "blog">
      {blog.title} {blog.author}

      <button style={hideWhenVisible} onClick={toggleVisability} className ="view">
        view
      </button>
      <div style={showWhenVisible} className ="blogInfo">
        {blog.url}<br></br>
        {blog.likes} <button onClick={like} className ="like">like</button><br></br>
        {blog.user.name}<br></br>
        <button onClick={deleteBlog} style={deleteVisable}> Remove </button>
        <button onClick={toggleVisability}>hide</button>
      </div>

    </div>

  )
}
Blog.propTypes ={
  blog: PropTypes.object.isRequired,
  triggerBlogReload: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}


export default Blog
