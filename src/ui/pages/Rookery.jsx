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

const ImageMark = styled.div`
    text-align:center;
    font-size:20px;
    padding:7px;
`

function avgValruses(list){
    let sum = 0
    alert(list[0])
    for (let item in list)
    {
        sum+=item.valruses_number 
    }
    return sum/list.length
}

export const Rookery = ()=>{
    const rookery  = useParams(); //rookery.id это id лежбища
    const filters = useSearchParams();
    const from = filters[0].get('from') //это с какой даты
    const to = filters[0].get('to') //это по какую
    const [list, setList] = React.useState([])
    const [data, setData] = React.useState([])
    const [hasList, setHasList] = React.useState(false)
    if (!hasList){
        fetch(`http://localhost:8082/rookeries/${rookery.id}/periods?datestart=${from}&dateend=${to}`).then(response=>response.json()).then(setList)
        setHasList(true)
        //alert(list)
    }

    
       // alert(rookery.id)
    return (
        <Wrapper >
            <Content>
                <Head>
                    <Zag>Wildview</Zag>
                    <Link to="/">
                    <Submit>Выйти</Submit>
                    </Link>
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
                Всего изображений за данный период: {list.length}
                <br />
                <br />
                {list.map(item=>
                            <div key={item.photo}>
                                <ImageMark>Дата {item.dat}</ImageMark>
                                <ImageMark>Количество детекций {item.valruses_number}</ImageMark>
                                <div>
                                 <img src={`http://127.0.0.1:8082/rookeries/${item.photo}/photo`}height="600px" width="600px"></img>
                                </div>
                                
                            </div>
                        )}
                
            </Content>
        </Wrapper>
    );
}