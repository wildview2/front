import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './Home';
import { Content } from './Home';
import { Head } from './Home';
import { Zag } from './Home';
import { Submit } from './Home';
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom'; 

const UpperLine = styled.div`
  display: flex;
  flex-direction: row;
  padding:20px;
  justify-content: space-between;
`

export const Rookery = ()=>{
    const  slug  = useParams();
   // alert(slug.id)
    return (
        <Wrapper >
            <Content>
                <Head>
                    <Zag>Wildview</Zag>
                    <Submit>Выйти</Submit>
                </Head>
                <UpperLine>
                    <div>
                        Общая численность
                    </div>
                    <div>
                        <div>
                                Лежбище {slug.id}
                        </div>
                        <div>
                            20-25мая
                        </div>
                    </div>
                </UpperLine>
            </Content>
        </Wrapper>
    );
}