import React, { useState } from 'react'

//Componentes para cada filtro
const FilterByDate = ({ date, onFilterChange }) => {
    return (
        <div>
            <label htmlFor="date-filter">Fecha:</label>
            <input type="date" id='date-filter' value={date} onChange={(e) => onFilterChange(e.target.value)} />
        </div>
    )
}

const FilterLocation = ({location, onFilterChange}) =>{
    return(
        <div>
            <label htmlFor="location-filter">Localidad:</label>
            <select name="" id="location-filter">
                <option value="">Todos</option>
                <option value="CABA">Capital Federal</option>
                <option value="Buenos Aires">Provincia de Buenos Aires</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Salta">Salta</option>
                </select>
        </div>
    )
}

const FilterCategory = ({category, onFilterChange}) => {
    return(
        <div>
            <label htmlFor="category-filter">Categoria:</label>
            <select name="" id="category-filter">
                <option value="Entretenimiento">Entretenimiento</option>
                <option value="Deportes">Deportes</option>
                <option value="Belleza">Belleza</option>
                <option value="Tecnología">Tecnología</option>
            </select>
        </div>
    )
}

export module FilterByDate
export default FilterLocation
export default FilterCategory

