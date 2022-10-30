import React from 'react';
import styled from 'styled-components'

const Navbar = () => {
    return (
       <Header>
       <NavContainer>
        <h2>Noticix</h2>
        <div className='navLinks'>
           <a href="/">Inicio</a><a href="/">Ultimas noticias</a><a href="/">Noticias cerca tuyo</a> <a href="/">Secciones</a>
        </div>
       </NavContainer>
       </Header>
    );
}

export default Navbar;

const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
`
const NavContainer = styled.nav`
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
background-color: #d8d8d8;
margin: 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 62px;
width: 98%;
box-shadow: 1px 2px 10px #0000006e;
h2{
    margin-left: 3rem;
}
.navLinks{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 3rem;
    height: 100%;
    width: 50%;
}
div a{
    color: black;
    text-decoration: none;
    text-align: center;
    height: 80%;
    width: 24.5%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`
