import React from "react"
import Background from "./../imgs/bg.jpg"
import styled from "styled-components"
import Calendarr from "../components/Calendar"
import { theme } from "./../../theme"

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
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
  display: flex;
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

`
const Left = styled.div`
  display: flex;
  flex-direction: column;
`
const Right = styled.div`
  display: flex;

`
const Center = styled.div`
  display: flex;

`
const Text = styled.span`
color: black;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 89px;
  padding: 17px 0px 17px 41px;
`
const Input = styled.input`
  display: flex;
  width: 100%;
  background: white;
  border: unset;
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

export const Home = () => {
  const [state, setState] = React.useState(false)
  const [legbishe, setLegbishe] = React.useState()
  const [date, Calendarr] = React.useState()

  return (
    <Wrapper onClick={() => setState(!state)}>
        <Content>
            <Head>
                <Zag>Wildview</Zag>
                <Submit>Выйти</Submit>
            </Head>
            <Main>
              <Left>
                <Text>Выберите лежбище и дату</Text>
                <Input
                type='text'
                value={legbishe}
                onChange={e=>setLegbishe(e.target.value)}>
                </Input>
                <Calendarik
                type
                value={date}
                onChange={e=>Calendarr(e.target.value)}>
                </Calendarik>
              </Left>
              <Center>

              </Center>
              <Right>

              </Right>
            </Main>
            {state.toString()}
        </Content>
    </Wrapper>
  )
}
