import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import "./Dashboard.css";
import NavBar from "../../Navbar/Navbar";
import Zone1 from "./Zones/Zone1";
import Zone2 from "./Zones/Zone2";
import FooterPage from "../../Footer";
const DashBoard= ()=> {
    return(
      <React.Fragment>
      <NavBar />
        <Jumbotron fluid>
        <Container fluid style={{textAlign:"center"}} >
          <h1 className="display-3"style={{fontSize:25}} >Weather Forecast</h1>
          
        </Container>
      </Jumbotron> 
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




