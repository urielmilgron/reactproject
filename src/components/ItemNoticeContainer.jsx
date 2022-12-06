import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getNotices } from "../asyncMock";
import ItemList from "./ItemList";

const ItemNoticeContainer = () => {
  const [notices, setNotices] = useState([]);
  console.log(notices);
  useEffect(() => {
    getNotices().then((notices) => {
      setNotices(notices);
    });
  });
  return (
    <Main>
      <section>
        <ItemList notices={notices} />
      </section>
    </Main>
  );
};

export default ItemNoticeContainer;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  section{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }
`;
