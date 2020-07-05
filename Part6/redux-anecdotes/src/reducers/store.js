import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {  combineReducers } from 'redux'
import anecdoteReducer from './anecdoteReducer'
import notificationReducer from './notificationReducer'
import filterReducer from './filterReducer'

console.log(notificationReducer)
const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notifications: notificationReducer,
  filter: filterReducer
})

export const store = createStore(reducer,composeWithDevTools())

