import React from "react"



const FilterByDate = ({ date, onFilterChange }) => {
    return (
        <div>
            <label htmlFor="date-filter">Fecha:</label>
            <input type="date" id='date-filter' value={date} onChange={(e) => onFilterChange(e.target.value)} />
        </div>
    )
}


export default FilterByDate