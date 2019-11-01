import React from 'react'
import DisplayCountries from './DisplayCountries';

const Filter = (props) => {
const countries = props.countries;
const typedCountry = props.typedCountry;


if(countries.length === 0){
    return(
        <div>
        ...Loading
        </div>
    )
}
else{
const filteredCountries = countries.filter(country => {
    //console.log(country.name)
    return country.name.toLowerCase().includes(typedCountry.toLowerCase());
   
})

console.log(` ${typedCountry} filtered countries are:`)
console.log(filteredCountries)

//const countryName = filteredCountries.map()

return(
    <div>
      <DisplayCountries filteredCountries = {filteredCountries} changeTypedCountry ={props.changeTypedCountry} />
    </div>
)
}

}

export default Filter