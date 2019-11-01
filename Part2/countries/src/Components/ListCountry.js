import React from 'react'

const ListCountry =(props) =>{

const countryInfo = props.countryInfo;
const countryName = countryInfo.name;
const changeTypedCountry = props.changeTypedCountry;

const selectCountry = (event) =>{
    event.preventDefault()
    changeTypedCountry(countryName)
}

return(
    <div>
        {countryName} 
        <button onClick = {selectCountry}>
            select
        </button>
    </div>
)
}



export default ListCountry