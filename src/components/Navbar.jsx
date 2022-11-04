import React, {useState} from "react";
import styled from "styled-components";
import BurguerMenu from "./BurguerMenu";

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
          <a href="/">Inicio</a>
          <a href="/">Ultimas noticias</a>
          <a href="/">Noticias cerca tuyo</a>
          <a href="/">Secciones</a>
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
  h2 {
    margin-left: 3rem;
  }
  .navLinks {
    position: absolute;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    width: 50%;
    top: -700px;
    left: -2000px;
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
      }
    }
  }
  .navLinks.active {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    background-color: aliceblue;
    top: 7%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      width: 30%;
    }
  }
  div a {
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
    height: 80%;
    width: 24.5%;
  }
  //Ocultamos el menú cuando pase cierto tamaño.
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
