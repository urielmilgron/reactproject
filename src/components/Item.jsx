import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"


const Item = ({ notice }) => {
  const [firstPhrase, setFirstPhrase] = useState('')
  const {img, title, id, textNotice} = notice
  const navigate = useNavigate()
  useEffect (()=>{
    const firstPhraseSave = textNotice.slice(0,150);
    firstPhraseSave[firstPhraseSave.length-1] === "." ? setFirstPhrase(firstPhraseSave) : setFirstPhrase(firstPhraseSave + "...")
  }, [notice])

  const handleDetailsClick = () => {
    navigate(`/notice/${id}`,
      {state:{notice}
    })
  }
  return (
    <Card key={id}>
      <div className="imageContainer">
        <img className="image" src={img} alt="" />
      </div>
      <div className="titleContainer">
        <h4 className="title">{title}</h4>
      </div>
      <section className="textContainer">
        <p className="text">{firstPhrase}</p>
        <CardLink onClick={()=>handleDetailsClick()}>Ver más</CardLink>
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
  min-height: 28rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1%;
  box-shadow: 1px 1px 10px 0px black;
  .imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
  }
  .image {
    max-width: 250px;
    max-height: 250px;
  }
  .titleContainer{
    width: 95%;
    text-align: center;
  }
  .textContainer{
    width: 95%;
    height: 11rem;
    text-align: center;
  }
  Link{
      height:150px;
    }
`;
const CardLink = styled.button`
width: 35%;
height: 2rem;
margin-bottom: 10px;
margin-top:10px;
text-decoration: none;
color: white;
background-color: #7070a4;
border-radius: 6px;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
box-shadow: 1px 1px 15px 0px #00000061;
`;
