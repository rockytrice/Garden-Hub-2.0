import React, { Component } from "react";
import {Container} from "reactstrap";
import "./Dashboard.css";
import WeatherTron from "../../WeatherJumbotron";
import Zone from "./Zones/Zone";
import FooterPage from "../../Footer";
import requireAuth from "../../requireAuth";
import ChartsPage from "../../Chart";
// import Forecast from "../../WeatherForecast";
class DashBoard extends Component {
  render(){
    return(
      <React.Fragment>
       <WeatherTron />
       <Container>
        <Zone />
        <ChartsPage />
       </Container> 
      <FooterPage />
      </React.Fragment>
    );
  }
    
};
export default requireAuth(DashBoard);




