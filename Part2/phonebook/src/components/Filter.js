import React from 'react';


const Filter = (props) => {
    const newfilter = props.newfilter;
    const setFilter = props.setFilter;
    


    const handleFilterChange = (event) => {
        event.preventDefault()
        setFilter(event.target.value);
    }



    return (
        <>
            filter shown with:
            <input
                value={newfilter}
                onChange={handleFilterChange}
            />
        </>
    )


}

export default Filter