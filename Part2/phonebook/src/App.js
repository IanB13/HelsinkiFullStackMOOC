import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter';
import Numbers from'./components/Numbers';

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