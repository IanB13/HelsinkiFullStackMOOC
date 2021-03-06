import React, {useEffect} from 'react';
import Axios from 'axios';
import DisplayWeather from './DisplayWeather';

const IndividualCountry =(props) =>{
const CountryInfo = props.countryInfo[0];

useEffect(() => {
    Axios.get(CountryInfo.flag)
      .then(
        Response => {
          //console.log(Response.data);
        }

      )
  }, [CountryInfo.flag])
 


console.log(CountryInfo);
console.log(`capital is ${CountryInfo.name}`)
return(
    <div>
       <h1>{CountryInfo.name}</h1>
       <br/>
       <div>
        Capital: {CountryInfo.capital}
       </div>
       <div>
        Population: {CountryInfo.population}
       </div>
        <h2>Languages</h2>
        <Languages CountryInfo = {CountryInfo}/>
        <img src = {CountryInfo.flag} alt ={`The flag of ${CountryInfo.name}`} />
        <DisplayWeather cityName = {CountryInfo.capital} />
    </div>
)

}

const Languages =({CountryInfo}) =>{

console.log(`inside language component ${CountryInfo.languages[0].name}`)
return(
    <ul>
        
           {CountryInfo.languages.map( lang => <li key ={lang.name}>{lang.name} </li>)} 

    </ul>

)

}




export default IndividualCountry