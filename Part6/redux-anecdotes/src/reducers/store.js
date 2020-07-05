import { createStore } from 'redux'
import reducer from './anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(reducer,composeWithDevTools())

