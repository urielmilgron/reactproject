import React from "react";
import styled from "styled-components";


const Item = ({ notice }) => {
  return (
    <Card>
      <div className="imageContainer">
        <img className="image" src={notice.img} alt="" />
      </div>
      <div className="titleContainer">
        <h4 className="title">{notice.title}</h4>
      </div>
      <section className="textContainer">
        <p className="text">{notice.textNotice}</p>
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
  width: 70%;
  height: 550px;
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
    max-width: 410px;
    max-height: 410px;
  }
  .titleContainer{
    background-color: yellowgreen;
    width: 98%;
    text-align: center;
  }
  .textContainer{
    width: 98%;
    text-align: center;
  }
`;
