import './ItemListContainer.css';
import {getNotices} from '../../asyncMock';
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
const [notices, setNotices] = useState([])
console.log(notices)
useEffect(()=>{
    getNotices().then((notices)=> {
        setNotices(notices)
    })
})


    return(
        <main className='mainListContainer'>
            <section className="sectionListContainer">
                <ItemList notices={notices}/>
            </section>
        </main>
    )
}

export default ItemListContainer;