import React from "react";
import {Container} from "reactstrap";
import "./Dashboard.css";
import WeatherTron from "../../WeatherJumbotron";
import NavBar from "../../Navbar/Navbar";
import Zone1 from "./Zones/Zone1";
import Zone2 from "./Zones/Zone2";
import FooterPage from "../../Footer";
const DashBoard= ()=> {
    return(
      <React.Fragment>
      <NavBar />
       <WeatherTron />
      <Container>
      <div className="row">
        <div className="col-md-6"><Zone1 /></div>
        <div className="col-md-6"><Zone2 /></div>
      </div>
      </Container>
      <FooterPage />
      </React.Fragment>
    );
};
export default DashBoard;




