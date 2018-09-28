import React from "react";
import {Button,Container} from "mdbreact";
import NavBar from "../../Navbar/Navbar";
import "./Control.css";

const Controls =() => {


        return(
            <React.Fragment>
            <NavBar />
            <Container className="controls" style={{marginTop:300}}>
                <div className="row">
                    <div className="col-md-4">
            <Button type="submit" color="success">ALL-ON</Button>
            <Button type="submit" color="danger">ALL-OFF</Button>
                    </div>
                <div className="col-md-4">
            <Button type="submit" color="success">ZONE 1-ON</Button>
            <Button type="submit" color="danger">ZONE 1-OFF</Button>
                    </div>
                <div className="col-md-4">
            <Button type="submit" color="success">ZONE 2-ON</Button>
            <Button type="submit" color="danger">ZONE 2-OFF</Button>
                </div>
            </div>
         </Container>
        
         </React.Fragment>
         
        )
    
    }


export default Controls;