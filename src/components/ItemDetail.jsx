import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";

const ItemDetail = () => {
    //Traigo el location para poder traer el estado del item y colocar
    //la data de la noticia seleccionada.
    const location = useLocation();
    const notice = location.state.notice;
    const {title, img, subtitle, textNotice} = notice;
    return (
        <Detail>
            <article className='articles__detail'>
            <header>
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
            </header>
            <article className='img_container__detail'>
                <img src={img} alt={img} />
            </article>
            <article className='text_container__detail'>
                <p>
                    {textNotice}
                </p>
            </article>
            </article>
        </Detail>

    );
}

export default ItemDetail;

const Detail = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
background-color: antiquewhite;
.articles__detail{
    background-color: #785d3a;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-content: center;
    header{
        background-color: bisque;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        h2{
            background-color: yellowgreen;
            text-align: center;
        }
        h4{
            text-align: center;
        }
    }
    .img_container__detail{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            background-color: antiquewhite;
            margin: 10px 10px 10px 10px;
            width: 500px;
        }
    }
    .text_container__detail{
        text-align: center;
    }
}
`;
