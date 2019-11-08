import React from 'react'
import phonebook from '../services/phonebook';


const Numbers = ({setPersons,setMessage, ...props}) =>{
const persons = ((props.filter==="")) ? props.persons : props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase()))

const deleteID = (id,name) =>{
   
    phonebook.deletePerson(id,name).then(
        Response =>{
            console.log(Response)
            setPersons(persons.filter(person => (person.id !== id)))
            setMessage(`${name} succesfully deleted`)
        }
        
    ).catch( error=>{
        console.log(error)
        setMessage(`Error: ${name} already deleted`)
    }
        
    )


    
};

const nums =() => persons.map(person =>{
    console.log(person.id)
    return (
    <Number
    key = {person.name}  
    name = {person.name} 
    number ={person.number}
    deleteID = {()=>deleteID(person.id,person.name)}
    />)
}
    )


    return(
        <div>
        {nums()}
        </div>
    
    )

}



const Number =(props)=>{
    
   // console.log(props.deleteID)
   // console.log(props.name)
   // console.log(props.number)
    return(
        <div>
        {props.name} {props.number} 
        <button onClick ={props.deleteID} > Delete </button>
        </div>
    )
}
export default Numbers

