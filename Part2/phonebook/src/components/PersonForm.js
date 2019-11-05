import React from 'react';
import phonebook from '../services/phonebook';

const PersonForm = ({persons,setPersons,...props}) =>{

    
//const persons = props.persons;
//const setPersons = props.setPersons;
const newName = props.newName;
const setNewName = props.setNewName;
const newNumber = props.newNumber ;
const setNewNumber = props.setNewNumber ;


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
    phonebook.createPerson({name: newName, number: newNumber});
    setNewName(``);
    setNewNumber(``);
    props.setMessage(`Added ${newName}`);
    }
    else {
        if(window.confirm(`${newName} is already added to phonebook, change number?`)){
          console.log(`MatchPerson is:`)
          console.log(MatchPerson)
          phonebook.changeNumber(MatchPerson, newNumber);
          const newSet =  persons.map(person => (person.name !==newName)? person :{...person, number: newNumber} )
          console.log(`new set is:`)
          setPersons(newSet);
          setNewName(``);
          setNewNumber(``);   
          props.setMessage(`Changed ${MatchPerson.name}'s number to ${newNumber}`);   
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