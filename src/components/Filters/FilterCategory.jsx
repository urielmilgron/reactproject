import React from "react"

const FilterCategory = ({category, onFilterChange}) => {
    return(
        <div>
            <label htmlFor="category-filter">Categoria:</label>
            <select name="" id="category-filter" value={category} onChange={(e)=>onFilterChange(e.target.value)}>
                <option value="Entretenimiento">Entretenimiento</option>
                <option value="Deportes">Deportes</option>
                <option value="Belleza">Belleza</option>
                <option value="Tecnología">Tecnología</option>
            </select>
        </div>
    )
}

export default FilterCategory