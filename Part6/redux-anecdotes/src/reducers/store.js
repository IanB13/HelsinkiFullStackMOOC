import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {  combineReducers } from 'redux'
import anecdoteReducer from './anecdoteReducer'
import notificationReducer from './notificationReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notifications: notificationReducer
})

export const store = createStore(reducer,composeWithDevTools())

