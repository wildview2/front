import React from "react"
import styled from "styled-components"
import Background from "./../imgs/bg.jpg"
import { theme } from "../../theme"
import { Link } from "react-router-dom"

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`

const Image = styled.img`
  object-fit: cover;
`
const Content = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  max-height: 350px;
  height: 100%;
  background: ${theme.colors.green};
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  width: 100%;
  max-height: 200px;
  height: 100%;
`

const Text = styled.span`
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 46px;
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


const Submit = styled.button`
text-decoration-color: rgba(225 225 225 0.62);
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 200px;
  background: white;
  border: unset;
  border-radius: 16px;
  padding: 16px;
  height: auto;
  opacity: 0.62;
`

export const Registr = () => {
  return (
    <Wrapper>
      <Image src={Background} width="100%" height="100%" />
      <Content>
        <Block>
          <Text>Добро пожаловать!</Text>
          <Input placeholder="Пароль" type="password"/>
          <Link to="/Home">
            <Submit>Продолжить</Submit>
          </Link>
        </Block>
      </Content>
    </Wrapper>
  )
}
