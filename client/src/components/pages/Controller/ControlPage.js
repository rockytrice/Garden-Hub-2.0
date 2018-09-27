import React from "react";
import {Button} from "mdbreact";


const Controls =() => {


        return(
            <div className ="Container">
                <div className="row">
                    <div className="col-md-4">
            <Button type="submit" color="primary">ALL-ON</Button>
            <Button type="submit" color="primary">ALL-OFF</Button>
                    </div>
                <div className="col-md-4">
            <Button type="submit" color="primary">ZONE1-ON</Button>
            <Button type="submit" color="primary">ZONE1-OFF</Button>
                    </div>
                <div className="col-md-4">
            <Button type="submit" color="primary">ZONE2-ON</Button>
            <Button type="submit" color="primary">ZONE2-OFF</Button>
                </div>
            </div>
         </div>
         
        )
    
    }


export default Controls;