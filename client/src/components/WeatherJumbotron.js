import React from "react";
import { Jumbotron, Container } from 'reactstrap';
 const WeatherTron = ()=>(
    <Jumbotron fluid>
    <Container fluid style={{textAlign:"center"}} >
      <h1 className="display-3"style={{fontSize:25}} >Weather Forecast</h1>
      
    </Container>
  </Jumbotron> 
 )
 export default WeatherTron;