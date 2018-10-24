import React, { Component } from "react";
import {Container} from "reactstrap";
import "./Dashboard.css";
import WeatherTron from "../../WeatherJumbotron";
import NavBar from "../../Navbar/Navbar";
import Zone from "./Zones/Zone";
import FooterPage from "../../Footer";


class DashBoard extends Component {
  render(){
    return(
      <React.Fragment>
      <NavBar />
       <WeatherTron />
       <Container>
        <Zone />
       </Container> 
      <FooterPage />
      </React.Fragment>
    );
  }
    
};
export default DashBoard;




