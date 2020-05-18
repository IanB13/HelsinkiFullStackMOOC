import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render,fireEvent } from '@testing-library/react'
import LoginForm from './LoginForm'

//stuck on tests, not sure if the fireEvent is not set up correctly or if mock function is not right
test('renders content', () => {
  const mockSetUser = jest.fn(),
    mockSetMessage = jest.fn()

  const component = render(
    <LoginForm  setUser ={mockSetUser} setMessage ={mockSetMessage} />
  )
  mockSetUser()
  const input = component.container.querySelector('input')
  const form = component.container.querySelector('button')
  fireEvent.change(input, {
    target: { value: 'testing of forms could be easier' }
  })

  fireEvent.click(form)
  screen.debug(component.container)

  expect(mockSetUser.mock.calls).toHaveLength(1)

})

//messing around with mock functions
test('mock functions', () => {

  const mockCallback = jest.fn(x => 42 + x)
  const testArray = [0,1,2]
  testArray.forEach(mockCallback)

  console.log(mockCallback.mock)
  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(3)

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0)

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1)

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[2].value).toBe(44)

})