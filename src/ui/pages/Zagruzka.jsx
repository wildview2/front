import React from "react"
import Background from "./../imgs/bg.jpg"
import styled from "styled-components"
import { theme } from "./../../theme"
import { Calendarr } from "../components/Calendar"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

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
  color: white;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  padding: 17px 0px 17px 17px;
  margin:10px auto;
  
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
const UnderHeader = styled.div`
display: flex;
width: 100%;
height: 40px;
margin: 7px;
justify-content: space-between;

`
const arrow = styled.div`

`

export const Zagruzka = () => {
  const [state, setState] = React.useState(false)
  const [legbishe, setLegbishe] = React.useState()
  const [date, Calendarr] = React.useState()

  const [valueCalendar, onChangeCalendar] = React.useState(new Date());

  const [dateFrom,setDateFrom]=React.useState()
  const [dateTo,setDateTo]=React.useState()

  return (
    <Wrapper onClick={() => setState(!state)}>
        <Content>
            <Head>
                <Zag>Wildview</Zag>
                <Submit>Выйти</Submit>
            </Head>
            <Main>
                <UnderHeader>
                <Image src="../img/Arrow1.png" width="100%" height="100%" />
                </UnderHeader>
                
            </Main>       
        </Content>
    </Wrapper>
  )
}