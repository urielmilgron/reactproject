import React, { useState } from 'react'
import FilterByDate from './Filters/FilterByDate'
import FilterCategory from './Filters/FilterCategory'
import FilterLocation from './Filters/FilterLocation'
//Componentes para cada filtro

const FilterBar = () =>{
    //Defino las props a enviar
    const [filters, setFilters] = useState({
        date:'',
        location: '',
        category:''
    })
    //Filter type function indicator
    const handleFilterChange = (filterType, value) =>{
        setFilters({
            ...filters,
            [filterType]:value
        })
    }

    return(
        <>
        <FilterByDate date={filters.date}
        onFilterChange={(value) => handleFilterChange('date',value)}/>
        <FilterLocation location={filters.location}
        onFilterChange={(value)=> handleFilterChange('location',value)}/>
        <FilterCategory
        category={filters.ccategory}
        onFilterChange={(value)=>handleFilterChange('category',value)}
        />
        </>
    )
}

export default FilterBar







