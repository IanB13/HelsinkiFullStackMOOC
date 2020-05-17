import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render,fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const component = render(
    <Blog blog ={blogInput.blog} user ={blogInput.user} triggerBlogReload = {null}/>
  )
  component.debug()
  expect(component.container).toHaveTextContent(
    'https://www.coolWHALEfacts.com/'
  )
  expect(component.container).toHaveTextContent(
    '1469'
  )
})

test('when "View" is clicked Blog URL and number of likes are shown', () => {
  const triggerBlogReload = jest.fn()
  const component = render(
    <Blog blog ={blogInput.blog} user ={blogInput.user} triggerBlogReload = {triggerBlogReload}/>
  )
  const viewPort = component.container.querySelector('.blogInfo')
  screen.debug(viewPort)

  const button = component.getByText('view')
  fireEvent.click(button)

  screen.debug(viewPort)
  expect(viewPort).toHaveStyle('')
  expect(viewPort).toHaveTextContent('https://www.coolWHALEfacts.com/')
  expect(viewPort).toHaveTextContent(1469)
})


test('when ""like" is clicked twice likes are called twice', () => {
  const mockboi = jest.fn()

  const component = render(
    <Blog blog ={blogInput.blog} user ={blogInput.user} triggerBlogReload = {mockboi}/>
  )

  const viewButton = component.getByText('view')
  fireEvent.click(viewButton)

  screen.debug(component.container.querySelector('.likeButton'))
  const likeButton = component.container.querySelector('.likeButton')
  screen.debug(likeButton)
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)
  screen.debug(component.container)
  console.log(mockboi.mock.calls)
  expect(mockboi.mock).toHaveLength(1)

})




const blogInput = {
  'blog': {
    'title': 'Whale facts',
    'author': 'Allex',
    'url': 'https://www.coolWHALEfacts.com/',
    'likes': 1469,
    'user': '{id: \'5eb4479f6478d637d0e952ee\', name: \'Ian Blair\',…}',
    'id': '5eb449d95ebc950e7889c556'
  },
  'user': {
    'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lYXRNaXNzbGUiLCJpZCI6IjVlYmUwZWYzOTE5OGQ5NmFiMDJlYTM1YyIsImlhdCI6MTU4OTUxMzk4NH0.n7SgR_PYrqsLsmyvw21_Uo7u6Wxgs1Wn1sDwZPOT2hQ',
    'username': 'meatMissle',
    'name': 'Brendan Maki'
  }
}