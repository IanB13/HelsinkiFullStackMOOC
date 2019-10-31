import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'
// none of these change state

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
    const putUrl = `${baseUrl}/${person.id}`
    axios.put(putUrl,{...person, number :newNumber, }).then(
 
        response => {
            console.log(response.data)}
    )
    .catch(
        err =>{
            console.log(err)
        }

    )


}

export default {getPeople, deletePerson, changeNumber}