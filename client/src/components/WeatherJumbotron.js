import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import Title from "./Title";
import Form from "./WeatherForm";
import Weather from "./Weather";

const API_KEY= `${process.env.REACT_APP_API_KEY}`


class WeatherTron extends React.Component {
  state= {
    icon: undefined,
    temperature: undefined,
    Maxtemperature: undefined,
    Mintemperature: undefined, 
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,

  }
  getWeather= async(event)=> {
        event.preventDefault();
        const city=event.target.elements.city.value;
        const country=event.target.elements.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
        const data = await api_call.json();
        console.log(data);
      }
    
    render() {
     return(
      <Jumbotron fluid>
    <Container fluid style={{textAlign:"center"}} >
    <Title />
      <Form getWeather={this.getWeather}/>
      <Weather />
    </Container>
  </Jumbotron> 
     )
    }
    
  }
 export default WeatherTron;