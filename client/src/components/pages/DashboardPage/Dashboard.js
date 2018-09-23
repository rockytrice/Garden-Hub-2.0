import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import "./Dashboard.css";
import NavBar from "../../Navbar/Navbar";
const DashBoard= ()=> {
    return(
      <React.Fragment>
      <NavBar />
        <Jumbotron fluid>
        <Container fluid style={{textAlign:"center"}} >
          <h1 className="display-3"style={{fontSize:25}} >Weather Forecast</h1>
          
        </Container>
      </Jumbotron> 
      </React.Fragment>
     
      
    );
};
export default DashBoard;




