import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom'; 

export const Rookery = ()=>{
    const  slug  = useParams();
    alert(slug.id)
    return <div>Отображается лежбище {slug.id}</div>;
}