import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Numbers from'./components/Numbers';
import Message from './components/Message';
import Phonebook from './services/phonebook';
import './index.css';


const App = () => {
  const [ persons, setPersons] = useState([]); 
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newfilter,setFilter] = useState('');
  const[message,setMessage] = useState("No Message");


  useEffect( ()=>{
    const change =() => setMessage("No Message");
    window.setTimeout(change,5*1000)  //5 second Message
    console.log('set message use effect triggerd')
    }
    ,[persons])


   useEffect(  ()  =>{ 
     async function peopleEffect(){
      const people = await Phonebook.getPeople();
      setPersons(people)
      console.log("set persons use effect triggered")
     }
     peopleEffect()
   },[message,newName])



  return (
    <div>
      
      <h2>Phonebook</h2>
      <Message message={message} />
      <Filter newfilter={newfilter} setFilter={setFilter} />

      <h2>Add a New:</h2>
      <PersonForm
        setMessage = {setMessage}
        persons={persons} setPersons={setPersons}
        newName={newName} setNewName={setNewName}
        newNumber={newNumber} setNewNumber={setNewNumber}
      />
       
      <h2>Numbers</h2>
        <Numbers persons={persons} 
        filter={newfilter} 
        setPersons ={setPersons}
        setMessage ={setMessage}/>
    </div>
  )
}





export default App