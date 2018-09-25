import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import Title from "./Title";
import Form from "./WeatherForm";
import Weather from "./Weather";

const API_KEY= `${process.env.REACT_APP_API_KEY}`


class WeatherTron extends React.Component {
  getWeather= async()=> {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=orlando,us&APPID=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);
      }
    
    render() {
     return(
      <Jumbotron fluid>
    <Container fluid style={{textAlign:"center"}} >
    <Title />
      <Form />
      <Weather />
    </Container>
  </Jumbotron> 
     )
    }
    
  }
 export default WeatherTron;