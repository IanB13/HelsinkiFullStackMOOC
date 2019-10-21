import React, { useState } from 'react'
import PersonForm from './components/PersonForm'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newfilter,setFilter] = useState('');



  const handleNameChange = (event) =>{
    event.preventDefault()
    setNewName(event.target.value);
  }
  const handleNumberChange =(event) =>{
    event.preventDefault()
    setNewNumber(event.target.value);
  }
  const handleFilterChange =(event) =>{
    event.preventDefault()
    setFilter(event.target.value);
  }


  const addPersontoPhoneBook = (event)=>{
    event.preventDefault()
    if(keyCheck(persons,newName) === false){
    setPersons(persons.concat({name: newName, number: newNumber}));
    setNewName("");
    setNewNumber(``);

    }
    else{
        window.alert(`${newName} is already added to phonebook`)
    }
  }

  
  

  return (
    <div>
      
      <h2>Phonebook</h2>
      <div>
      filter shown with: 
      <input
        value ={newfilter}
        onChange ={handleFilterChange}
      />

      </div>
      <h2>Add a New</h2>
      <PersonForm  />
       
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

      
      <h2>Numbers</h2>
        <Numbers persons ={persons} filter ={newfilter}/>
    </div>
  )
}

const Numbers =(props) =>{

const persons = ((props.filter==="")) ? props.persons : props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase()))


return(
    <div>
    {persons.map(person => <Number key = {person.name} name = {person.name} number ={person.number}/>) }
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



export default App