import React, { useEffect, useState } from 'react';
import Item from './Item';
import FilterBar from './FilterBar';

const ItemList = ({notices}) => {
    //Mantenemos las noticias en un estado para poder actualizar el listado en caso de que el usuario quiera
    //usar un filtro

    const [filteredNews, setFilteredNews] = useState([])
    useEffect(()=>{
        setFilteredNews(notices)
    },[])
   

   //Creamos una función que cambie el filtro

   const filterNews = (category) => {
    const filtered = notices.filter((newsItem)=> {
        return newsItem.category === category
    })
    setFilteredNews(filtered)
   }

    return ( 
        <div>
      <h1>Noticias</h1>
      <button onClick={() => filterNews("Entretenimiento")}>Entretenimiento</button>
      <button onClick={() => filterNews("Deportes")}>Deportes</button>
      <button onClick={() => setFilteredNews(notices)}>Mostrar todo</button>
      <ul>
        {filteredNews.map((newsItem) => {
          return (
            <Item key={newsItem.id} notice={newsItem}/>
          );
        })}
      </ul>
    </div>
    );
}

export default ItemList;

