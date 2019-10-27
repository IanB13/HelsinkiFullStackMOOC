import React from 'react'
import ListCountry from './ListCountry'
import IndividualCountry from './IndividualCountry';

const DisplayCountries = (props) => {

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
            {CountriesToDisplay.map(countryinfo =>  <ListCountry key = {countryinfo.name} countryInfo = {countryinfo} />)}
        </div>
    )

}

export default DisplayCountries