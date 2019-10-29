import React from 'react'

const Numbers = (props) =>{
   const nums =() =>{
    persons.map(person => {
    return(
    <Number 
    key = {person.name} 
    name = {person.name} 
    number ={person.number}
    
    />
    )} 
    )}

    const persons = ((props.filter==="")) ? props.persons : props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase()))


    return(
        <div>
        { nums()}
        </div>
    
    )

}

const Number =(props)=>{
    return(
        <div>
        {props.name} {props.number}
        </div>
    )
}
export default Numbers

