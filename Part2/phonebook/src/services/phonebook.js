import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getPeople = () =>{
    const get = axios.get(baseUrl)
    return get.then(response => response.data)
}

const deletePerson = (id,person) =>{
    if (window.confirm(`Are you sure you want to delete ${person}`))
    {
    const deleteUrl = `${baseUrl}/${id}` ;
    console.log(deleteUrl)
    axios.delete(deleteUrl).then(
        Response =>{
            console.log(Response)
        }
    )
    return true;
    }
}

const changeNumber =(person,newNumber) =>{
    axios.post(`${baseUrl}/${person.id}`,{number :person}).then(
        response => console.log(response)
    )


}

export default {getPeople, deletePerson, changeNumber}