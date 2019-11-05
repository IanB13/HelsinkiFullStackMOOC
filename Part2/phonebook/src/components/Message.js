import React from 'react'

const Message =({message}) =>{
    console.log(message)

if(message ==="No Message"){
return null}
else{
    return(
        <div className ="message">
            {message}
        </div>
    )

}
}

export default Message