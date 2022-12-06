import React from 'react';
import styled from 'styled-components';

const Item = ({notice}) => {
    return (
        <Card>
            <div className='imageContainer'><img className='image' src={notice.img} alt="" /></div>
            <div className='titleContainer'><h4 className='title'>{notice.title}</h4></div>
            <section className='textContainer'><p className='text'>{notice.textNotice}</p></section>
        </Card>
    );
}

export default Item;

const Card = styled.div`
width: 70%;
background-color: aqua;
.imageContainer{

}
.image{
    width: 300px;
}
`
