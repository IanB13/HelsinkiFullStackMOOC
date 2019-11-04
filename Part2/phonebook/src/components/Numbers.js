import React from 'react'
import phonebook from '../services/phonebook';

const Numbers = ({setPersons, ...props}) =>{
const persons = ((props.filter==="")) ? props.persons : props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase()))

const deleteID =(id,name) =>{
    const check = phonebook.deletePerson(id,name)
    if(check === true){
    setPersons(persons.filter(person => (person.id !== id)))
    }
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

