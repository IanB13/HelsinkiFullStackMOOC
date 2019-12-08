import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'
// none of these change state

const getPeople = async () =>{
    const get = axios.get(baseUrl)
    const response = await get
    return response.data
}

const createPerson =(newObject) =>{
    return axios.post(baseUrl,newObject)
}

const deletePerson = (id,person) =>{
    if (window.confirm(`Are you sure you want to delete ${person}`))
    {
    const deleteUrl = `${baseUrl}/${id}` ;
    console.log(deleteUrl)
    console.log(id)
    return axios.delete(deleteUrl)
    
    }
}



const changeNumber =(person,newNumber) =>{
   
    const putUrl = `${baseUrl}/${person.id}`
    axios.put(putUrl,{...person, number :newNumber, }).then(
 
       response => {
            console.log(response.data)
            }
    )
    .catch(
        err =>{
            console.log(err)
        }

    )
    

}

export default {getPeople, deletePerson, changeNumber,createPerson}