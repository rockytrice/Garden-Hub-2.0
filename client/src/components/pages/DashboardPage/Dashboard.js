import React from "react";
import {Container} from "reactstrap";
import "./Dashboard.css";
import WeatherTron from "../../WeatherJumbotron";
import NavBar from "../../Navbar/Navbar";
import Zone from "./Zones/Zone";
// import Zone2 from "./Zones/Zone2";
import FooterPage from "../../Footer";
const DashBoard= ()=> {
    return(
      <React.Fragment>
      <NavBar />
       <WeatherTron />
       <Container>
      {/* <div className="row"> */} 
        <Zone />
        {/* <div className="col-md-6"><Zone2 /></div> */}
       {/* </div> */}
       </Container> 
      <FooterPage />
      </React.Fragment>
    );
};
export default DashBoard;




