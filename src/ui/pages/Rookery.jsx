import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './Home';
import { Content } from './Home';
import { Head } from './Home';
import { Zag } from './Home';
import { Submit } from './Home';
import styled from "styled-components"
import { UnderHeader } from './Zagruzka';
import { Place } from './Zagruzka';
import { Text } from './Home';
import { Link, useSearchParams } from "react-router-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom'; 

const Info = styled.div`
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 46px;
`

export const Rookery = ()=>{
    const rookery  = useParams(); //rookery.id это id лежбища
    const filters = useSearchParams();
    const from = filters[0].get('from') //это с какой даты
    const to = filters[0].get('to') //это по какую
    const [list, setList] = React.useState()
    const [hasList, setHasList] = React.useState(false)
    if (!hasList){
        fetch("http://localhost:8082/rookeries/"+rookery.id+"/periods?datestart="+from+"&dateend=" +to).then(response=>response.json()).then(setList)
        setHasList(true)
    }
       // alert(rookery.id)
    return (
        <Wrapper >
            <Content>
                <Head>
                    <Zag>Wildview</Zag>
                    <Submit>Выйти</Submit>
                </Head>
                <UnderHeader>
                    <Link to="/Home">
                        <img src="/imgs/ar.png" height="30px" width="100px"></img>
                    </Link>
                    <Place>
                        <Info>Лежбище {rookery.id} </Info>
                        <Info>{from} — {to}</Info>
                    </Place>
                </UnderHeader>
            </Content>
        </Wrapper>
    );
}