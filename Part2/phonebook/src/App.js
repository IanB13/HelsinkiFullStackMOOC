import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter';
import Numbers from'./components/Numbers';
import Axios from 'axios';

const App = () => {
  const [ persons, setPersons] = useState([]); 
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newfilter,setFilter] = useState('');

   useEffect( ()=>{
    Axios.get('http://localhost:3001/persons')
    .then(
      response =>{
        console.log(response)
        setPersons(response.data)
      }
    )
   },[]) 




  return (
    <div>
      
      <h2>Phonebook</h2>

      <Filter newfilter={newfilter} setFilter={setFilter} />

      <h2>Add a New</h2>
      <PersonForm
        persons={persons} setPersons={setPersons}
        newName={newName} setNewName={setNewName}
        newNumber={newNumber} setNewNumber={setNewNumber}
      />
       
      <h2>Numbers</h2>
        <Numbers persons={persons} 
        filter={newfilter} />
    </div>
  )
}





export default App