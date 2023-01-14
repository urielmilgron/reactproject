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

.articles__detail{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-content: center;
    width: 98%;
    background-color: #fdfdfd;
    z-index: -1;
    border-radius: 1%;
    border-left: 0.5px solid #3d3d3d36;
    border-right: 0.5px solid #3d3d3d36;
    header{
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        margin: 0;
        h2{
            margin:40px 5px 15px 5px;
            text-align: center;
            width: 94%;
        }
        h4{
            margin:20px 5px 15px 5px;
            text-align: justify;
            width: 84%;
            padding-top: 20px;
            border-top: 1px solid #33333351
        }
    }
    .img_container__detail{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            margin: 10px 10px 10px 10px;
            width: 500px;
            border-radius: 5px;
        }
    }
    .text_container__detail{
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
            width: 84%;
            text-align: justify;
        }
    }
}
`;
