import React from 'react';
import { useLocation } from 'react-router-dom';

const ItemDetail = () => {
    const location = useLocation()
    const notice = location.state.notice
    return (
        <>
            <h2>{notice.title}</h2>
        </>

    );
}

export default ItemDetail;
