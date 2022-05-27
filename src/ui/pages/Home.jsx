import React from "react"
import Background from "./../imgs/bg.jpg"
import styled from "styled-components"

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


export const Home = () => {
  const [state, setState] = React.useState(false)

  return (
    <Wrapper onClick={() => setState(!state)}>
        <Content>
            <Head>
                <Zag>Wildview</Zag>
                <Submit>Выйти</Submit>
            </Head>
            {state.toString()}
        </Content>
    </Wrapper>
  )
}
