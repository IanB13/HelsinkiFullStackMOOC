import React from 'react'

const DisplayCountries = (props) => {

const CountriesToDisplay = props.filteredCountries;
//trying to make a mapping function for react componetns, not working

const countryMap = (CountriesToDisplay) =>{CountriesToDisplay.map( countryinfo => {
   // console.log(countryinfo.name)
 return(
    <div>
        {countryinfo.name}
    </div>
 )
})};

    return (
        <div>
            {CountriesToDisplay.map(countryinfo => {
                return (
                    <div>
                        {countryinfo.name}
                    </div>
                )
            })}
        </div>
    )

}

export default DisplayCountries