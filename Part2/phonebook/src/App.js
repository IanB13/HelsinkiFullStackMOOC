import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter';
import Numbers from'./components/Numbers';
import Phonebook from './services/phonebook'



const App = () => {
  const [ persons, setPersons] = useState([]); 
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newfilter,setFilter] = useState('');


   useEffect(  ()  =>{ 
     async function boi(){
      const temp = await Phonebook.getPeople();
      console.log("temp is")
      console.log(temp)
      setPersons(temp)
     }
     boi()
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
        filter={newfilter} 
        setPersons ={setPersons}/>
    </div>
  )
}





export default App