import React from 'react'

const Filter = (props) => {
const countries = props.countries;
const changeFilter = props.changeFilter;
const typedCountry = props.typedCountry;
console.log(typedCountry)

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
    return country.name.includes(typedCountry);
   
})

console.log(` ${typedCountry} filtered countries are:`)
console.log(filteredCountries)

//const countryName = filteredCountries.map()

return(
    <div>
      hello
    </div>
)
}

}

export default Filter