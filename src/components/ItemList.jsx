import React from 'react';
import Item from './Item'
const ItemList = ({notices}) => {
    return (
        <>
        {notices.map(notice => <Item key={notice.id} notice={notice}/>)}
        </>
    );
}

export default ItemList;

