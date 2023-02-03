import React from 'react'


const FilterLocation = ({location, onFilterChange}) =>{
    return(
        <div>
            <label htmlFor="location-filter">Localidad:</label>
            <select name="" id="location-filter" value={location} onChange={(e)=>onFilterChange(e.target.value)}>
                <option value="">Todos</option>
                <option value="CABA">Capital Federal</option>
                <option value="Buenos Aires">Provincia de Buenos Aires</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Salta">Salta</option>
                </select>
        </div>
    )
}

export default FilterLocation
