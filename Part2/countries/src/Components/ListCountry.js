import React from 'react'

const ListCountry =(props) =>{

const countryInfo = props.countryInfo;
const countryName = countryInfo.name;


return(
    <div>
        {countryName}
    </div>
)
}



export default ListCountry