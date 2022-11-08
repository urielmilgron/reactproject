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
  /* border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #64758C;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  width: 98%;
  box-shadow: 1px 2px 10px #0000006e;
  h2 {
    margin-left: 3rem;
    color: #F0F0F2;
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
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 98%;
    height: 300px;
    display: flex;
    flex-direction: column;
    background-color: #3E3E40;
    align-items: center;
    position: absolute;
    top: 7.5%;
    z-index: -1;
    left: 0;
    right: 0;
    text-align: center;
    animation:  1s navAnimation alternate forwards;
    @media (max-width: 375px ){
      top: 10%;
    }
    a{
      width: 40%;
    }
  }
  @keyframes navAnimation{
    0%{
      height: 0;
    }
    100%{
      height: 300px;
    }
  }
  div a {
    color: #F0F0F2;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
    height: 80%;
    width: 24.5%;
  } */

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
    top:10%;
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
