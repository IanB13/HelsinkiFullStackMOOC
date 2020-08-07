import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render,fireEvent } from '@testing-library/react'
import NewBlogForm from './NewBlogForm'
//user,triggerBlogReload,setMessage
test('renders content', () => {
  const mockTrigger = jest.fn(),
    mockSetMessage = jest.fn()

  const component = render(
    <NewBlogForm  user ={null} triggerBlogReload ={mockTrigger} setMessage ={mockSetMessage} />
  )

  const blogTitle = component.container.querySelector('#blogTitle')
  const blogAuthor = component.container.querySelector('#blogAuthor')
  const blogURL = component.container.querySelector('#blogURL')
  const formSubmit = component.container.querySelector('#newBlogButton')

  screen.debug(component.container)

  fireEvent.change(blogTitle, {
    target: { value: 'The blog title' }
  })
  fireEvent.change(blogAuthor, {
    target: { value: 'Bob Blog Author' }
  })
  fireEvent.change(blogURL, {
    target: { value: 'www.blogURL.com' }
  })

  fireEvent.click(formSubmit)

  screen.debug(component.container)
  console.log(mockTrigger.mock.calls[0][0].URL)

  expect(mockTrigger.mock.calls[0][0].URL).toBe('www.blogURL.com')
  expect(mockTrigger.mock.calls[0][0].author).toBe('Bob Blog Author')
  expect(mockTrigger.mock.calls[0][0].title).toBe('The blog title')
  expect(mockTrigger.mock.calls).toHaveLength(1)
})