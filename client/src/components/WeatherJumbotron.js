import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import Title from "./Title";
import Form from "./WeatherForm";
import Weather from "./Weather";



class WeatherTron extends React.Component {
    render(){
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