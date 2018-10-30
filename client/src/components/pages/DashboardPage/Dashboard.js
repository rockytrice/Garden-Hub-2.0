import React, { Component } from "react";
import {Container} from "reactstrap";
import "./Dashboard.css";
import WeatherTron from "../../WeatherJumbotron";
import Zone from "./Zones/Zone";
import FooterPage from "../../Footer";
import requireAuth from "../../requireAuth";
import ChartsPage from "../../Chart";
import ChartsPage2 from "../../chart2";

class DashBoard extends Component {

  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:3001",
    }
  }



  render(){
    return(
      <React.Fragment>
       <WeatherTron />
       <Container>
        <Zone />
        <ChartsPage  />
        <br />
        <ChartsPage2/>
       </Container> 
      <FooterPage />
      </React.Fragment>
    );
  }
    
};
export default requireAuth(DashBoard);




