import React from 'react'
import {useEffect} from 'react'
import {useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {removeNotification} from '../reducers/actions'

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notifications)
  useEffect(()=>{
    setTimeout(()=>{
        dispatch(removeNotification())
    }, 2000)

  // eslint-disable-next-line 
  },[notification])
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(notification){
  return (
    <div style={style}>
      {notification}
    </div>
  )
  }
  else return null
}

export default Notification