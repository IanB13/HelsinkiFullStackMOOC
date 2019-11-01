import React from 'react'
import ListCountry from './ListCountry'
import IndividualCountry from './IndividualCountry';

const DisplayCountries = (props) => {
    console.log(`in Display Countries  ${props.changeTypedCountry}`)
const CountriesToDisplay = props.filteredCountries;

if(CountriesToDisplay.length > 10){
    return(
        <div>
            ...TOO many
        </div>
    )

}
else if(CountriesToDisplay.length === 1){
    return(
        <IndividualCountry countryInfo = {CountriesToDisplay} />
    )

}
    return (
        <div>
            {CountriesToDisplay.map(countryinfo =>  <ListCountry key = {countryinfo.name} countryInfo = {countryinfo}  changeTypedCountry ={props.changeTypedCountry} />)}
        </div>
    )

}

export default DisplayCountries