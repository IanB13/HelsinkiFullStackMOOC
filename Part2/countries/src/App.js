import React ,{useEffect, useState} from 'react';
import Axios from 'axios';
import Filter from './Components/Filter';
import SelectCountry from './Components/SelectCountry';


function App() {
  const [countries, addcountries] = useState([]);
  const [typedCountry, changeTypedCountry] = useState("");
  

  useEffect(() => {
    Axios.get("https://restcountries.eu/rest/v2/all")
      .then(
        Response => {
          addcountries(Response.data);
        }

      )
  }, [])

 
  return (
    <div>
    find countries: <SelectCountry typedCountry ={typedCountry} changeTypedCountry = {changeTypedCountry}/>
    <Filter typedCountry ={typedCountry} countries = {countries}  />
    </div>
  );
}

export default App;
