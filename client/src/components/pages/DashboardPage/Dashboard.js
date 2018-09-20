import React from "react";
import { Jumbotron, Container } from 'reactstrap';
const DashBoard= ()=> {
    return(
        <div>
      <Jumbotron fluid>
        <Container fluid style={{textAlign:"center"}} >
          <h5 className="display-3" >Weather Forecast</h5>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div> 
    );
};
export default DashBoard;