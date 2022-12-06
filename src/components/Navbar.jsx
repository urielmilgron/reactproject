import React, {useState} from "react";
import styled from "styled-components";
import BurguerMenu from "./BurguerMenu";
import {NavLink} from 'react-router-dom'

const Navbar = () => {
const [btnClick, setBtnClick] = useState(false)
const handleClick = () => {
  //Cuando está true lo pasa a false y viceversa
setBtnClick(!btnClick)
}
  return (
    <Header>
      <NavContainer>
        <h2>Noticix</h2>
        <div className={`navLinks ${btnClick ? 'active' : ''}`}>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/lastnews">Ultimas noticias</NavLink>
          <NavLink href="/newsnearyou">Noticias cerca tuyo</NavLink>
          <NavLink href="/sections">Secciones</NavLink>
        </div>
        <div className="burguer">
          <BurguerMenu btnClick={btnClick} handleClick={handleClick}/>
        </div>
      </NavContainer>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavContainer = styled.nav`
  //Nuevo header
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #64758C;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  height: 62px;
  box-shadow: 1px 2px 10px #0000006e;
 h2{
  color: white;
  margin-left: 10px;
 }
  .navLinks{
    position: absolute;
    top: -200px;
  }
  .navLinks.active{
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    top:7.5%;
    background-color: #BDBDBF;
    box-shadow: 1px 2px 10px #0000006e;
    animation: aparecer 1s alternate forwards;
  }
  @keyframes aparecer {
    0%{
      height: 0px;
    }
    100%{
      height: 300px;
    }
  }
  div a{
      color: white;
      text-decoration: none;
      font-style: normal;
      background-color: #3E3E40;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 24.8%;
    }
  //Ocultamos el menú cuando pase cierto tamaño.
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
