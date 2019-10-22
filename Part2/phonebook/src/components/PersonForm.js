import React from 'react';



const PersonForm = (props) =>{

    
const persons = props.persons;
const setPersons = props.setPersons;
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
    if(keyCheck(persons,newName) === false){
    setPersons(persons.concat({name: newName, number: newNumber}));
    setNewName(``);
    setNewNumber(``);

    }
    else{
        window.alert(`${newName} is already added to phonebook`)
    }
  }

const keyCheck = (Persons,newName) =>{
    let match = false;
    Persons.forEach(element => {
        console.log(element.name)
        if(element.name === newName){
            match = true;
        }
    });
    return match;
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