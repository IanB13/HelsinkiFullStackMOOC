import React from 'react'

const SelectCountry = (props) =>{
const typedCountry = props.typedCountry;
const changeTypedCountry =props.changeTypedCountry;
console.log(`in select country change typed countries is ${changeTypedCountry}`)
    const handleCountryChange = (event) =>{
        event.preventDefault();
        changeTypedCountry(event.target.value);
    }

return(
    <form className = "CountryInput">
        <input value ={typedCountry} onChange = {handleCountryChange}/>
    
    </form>
)

}

export default SelectCountry;