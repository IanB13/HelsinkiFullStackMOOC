import React from 'react';
import Axios from 'axios';
import phonebook from '../services/phonebook';

const PersonForm = ({persons,setPersons,...props}) =>{

    
//const persons = props.persons;
//const setPersons = props.setPersons;
const newName = props.newName;
const setNewName = props.setNewName;
const newNumber = props.newNumber ;
const setNewNumber = props.setNewNumber ;


const create = async newObject =>{
  const request = Axios.post('http://localhost:3001/persons',newObject)
  const Response = await request;
  return Response.data;

}

const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value);
}
const handleNumberChange = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value);
}

const addPersontoPhoneBook = (event)=>{
    event.preventDefault()
    const MatchPerson = keyCheck(persons,newName);
    
    if( MatchPerson === undefined){
    setPersons(persons.concat({name: newName, number: newNumber}));
    create({name: newName, number: newNumber});
    setNewName(``);
    setNewNumber(``);

    }
    else {
        if(window.confirm(`${newName} is already added to phonebook, change number?`)){
          console.log(`MatchPerson is:`)
          console.log(MatchPerson)
          phonebook.changeNumber(MatchPerson, newNumber);
          const newSet =  persons.map(person => (person.name !==newName)? person :{...person, number: newNumber} )
          console.log(`new set is:`)
          setPersons(newSet);
        }
    }
  }

const keyCheck = (Persons,newName) =>{
    
    for(const person of Persons){
      if(person.name === newName){ 
        return person;
      }

    }
}



return(
    <>
      <form>
        <div>
          name: <input 
          value ={newName}
          onChange ={handleNameChange}/>
        </div>
        <div>number: <input
            value ={newNumber}
            onChange ={handleNumberChange} 
        /></div>
        <div>
          <button type="submit" onClick ={addPersontoPhoneBook}>add</button>
        </div>
      </form>
    </>

)

}


export default PersonForm