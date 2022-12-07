import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"


const Item = ({ notice }) => {
  const [lastPhrase, setLastPhrase] = useState('')
  const [firstPhrase, setFirstPhrase] = useState('')
  useEffect (()=>{
    setLastPhrase(notice.textNotice.slice(200))
    console.log(lastPhrase)
    const firstPhraseSave = notice.textNotice.slice(0,200);
    firstPhraseSave[firstPhraseSave.length-1] === "." ? setFirstPhrase(firstPhraseSave) : setFirstPhrase(firstPhraseSave + "...")
  }, [notice])
  const showLastPhrase = () => {
    
  }
  return (
    <Card>
      <div className="imageContainer">
        <img className="image" src={notice.img} alt="" />
      </div>
      <div className="titleContainer">
        <h4 className="title">{notice.title}</h4>
      </div>
      <section className="textContainer">
        <p className="text">{firstPhrase}</p>
        {lastPhrase === '' ? `` : <Link onClick={showLastPhrase}>Ver más...</Link>}
      </section>
    </Card>
  );
};

export default Item;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 90%;
  min-height: 34rem;
  background-color: aqua;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1%;
  box-shadow: 1px 1px 10px 0px black;
  .imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: azure;
    width: 100%;
    height: 50%;
  }
  .image {
    max-width: 250px;
    max-height: 250px;
  }
  .titleContainer{
    background-color: yellowgreen;
    width: 98%;
    text-align: center;
  }
  .textContainer{
    width: 98%;
    background-color:blue;
    text-align: center;
  }
`;
