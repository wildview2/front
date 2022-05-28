import React from "react"
import styled from "styled-components"
import { theme } from "./../../theme"
import 'react-calendar/dist/Calendar.css'
import { Link } from "react-router-dom"
import axios from 'axios' 
const Wrapper = styled.div`
overflow: auto
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${theme.colors.green};
`

const Image = styled.img`
  object-fit: cover;
`
const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: ${theme.colors.green};
`
const Head = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 112px;
  left: 0px;
  top: 0px;
  background: rgba(255, 255, 255, 0.62); 
`
const Zag = styled.span`
  color: black;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 89px;
  padding: 17px 0px 17px 41px;
`
const Submit = styled.button`
  cursor: pointer;
  color: black;
  margin-right: 50px;
  font-size: 20px;
  justify-content: center;
  width: 200px;
  background: #A8B8A3;
  border: unset;
  border-radius: 16px;
  padding: 16px;
  height: auto;
  opacity: 0.62;
`
const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  `
const Right = styled.div`
  
`
const Divider = styled.div`
height = 90%;
border: 3px solid white;
border-radius:10px;
margin: 50px 5px 0px 5px;
`
const Text = styled.div`
  color: black;
  text-align: center;
  font-style: normal;
  font-weight: 100;
  font-size: 30px;
  margin:10px;
`
const Input = styled.input`
  margin: 30px auto 30px auto;
  width:70%;
  background: white;
  placeholder: 
  border-radius: 16px;
  padding: 16px;
  height: auto;
`
const Calendarik = styled.div`
  display: flex;
  width: 100%;
  background: white;
  border: unset;
  border-radius: 16px;
  padding: 16px;
  height: 100px;
`

const CalendarWrapper = styled.div`
  margin: 30px auto 30px auto;
`

const ActionCard = styled.div`
  display:flex;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.62); 
  border-radius:10px;
  margin: 30px auto;
  width:80%;
  padding:20px;
`
export const UnderHeader = styled.div`
display: flex;
width: 90%;
height: auto;
margin: 7px;
justify-content: space-between;

`
export const Place = styled.div`
display: flex
flex-direction: column;
`

export const Zagruzka = () => {


  const [uploadFile, setUploadFile] = React.useState();
  const [superHero, setSuperHero] = React.useState();
  
  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("superHeroName", superHero);
    dataArray.append("uploadFile", uploadFile);

    axios
      .post("api_url_here", dataArray, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((response) => {
        // successfully uploaded response
      })
      .catch((error) => {
        // error response
      });
  };

  return (
    <Wrapper >
        <Content>
            <Head>
                <Zag>Wildview</Zag>
                <Link to="/">
                <Submit>Выйти</Submit>
                </Link>
            </Head>
            <Main>
                <UnderHeader>
                <Link to="/Home">
                <img src="imgs/ar.png" height="30px" width="100px"></img>
                </Link>
                <Place>
                    <Text>Лежбище 1 </Text>
                    <Text>24-27 мая 2022</Text>
                </Place>
                </UnderHeader>
                                <div>
                  <form onSubmit={submitForm}>
                  <img src="imgs/photo.png" height="250px" width="320px" onClick={<input type="file"/>} ></img>

                    <input type="file" onChange={(e) => setUploadFile(e.target.files)} />
                    <br />
                    <input type="submit" />
                  </form>
                </div>

            </Main>       
        </Content>
    </Wrapper>
  )
}
