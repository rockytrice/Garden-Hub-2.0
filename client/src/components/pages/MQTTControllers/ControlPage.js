import React from "react";
import {Button,Container} from "mdbreact";
import socketIOClient from "socket.io-client";
import "./Control.css";

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            endpoint: 'http://localhost:3001'
        }
  
    }

    autoToggle = () => {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint); //connet to the server side socket
        socket.emit("auto", 'toggle');
    }

    relay1On = () => {
        const { endpoint } = this.state;
        const socket1 = socketIOClient(endpoint);
        console.log('button clicked');
        socket1.emit('btn', 'button1 clicked!!');
        }
        
    relay1Off = () => {
        const { endpoint } = this.state;
        const socket1 = socketIOClient(endpoint);
        console.log('button clicked');
        socket1.emit('btn2', 'button2 clicked!!');
    }
    
    relay2On = () => {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        console.log('button clicked');
        socket.emit('btn3', 'button3 clicked!!');
        }
        
    relay2Off = () => {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        console.log('button clicked');
        socket.emit('btn4', 'button4 clicked!!');
    }
    relay3On = () => {
        const { endpoint } = this.state;
        const socket5 = socketIOClient(endpoint);
        console.log('button clicked');
        socket5.emit('btn5', 'button5 clicked!!');
        }
        
    relay3Off = () => {
        const { endpoint } = this.state;
        const socket5 = socketIOClient(endpoint);
        console.log('button clicked');
        socket5.emit('btn6', 'button6 clicked!!');
    }
    relay4On = () => {
        const { endpoint } = this.state;
        const socket7 = socketIOClient(endpoint);
        console.log('button clicked');
        socket7.emit('btn7', 'button7 clicked!!');
        }
        
    relay4Off = () => {
        const { endpoint } = this.state;
        const socket8 = socketIOClient(endpoint);
        console.log('button clicked');
        socket8.emit('btn8', 'button8 clicked!!');
    }

    allOn = () => {
        const { endpoint } = this.state;
        const socket9 = socketIOClient(endpoint);
        socket9.emit("allOn", "all on");
    }

    allOff = () => {
        const { endpoint } = this.state;
        const socket10 = socketIOClient(endpoint);
        socket10.emit("allOff", "all off");
    }
  

    render(){
        return(
            <React.Fragment>
            <Container className="controls" style={{marginTop:300}}>
                <div className="row">
                    <div className="col-md-4">
                        <Button type="submit" color="success" onClick={this.relay1On}>ZONE 1-ON</Button>
                        <Button type="submit" color="danger" onClick={this.relay1Off}>ZONE 1-OFF</Button>
                    </div>
                    <div className="col-md-4">
                        <Button type="submit" color="success" onClick={this.relay2On}>ZONE 2-ON</Button>
                        <Button type="submit" color="danger"onClick={this.relay2Off}>ZONE 2-OFF</Button>
                    </div>
                    <div className="col-md-4">
                        <Button className="autoToggle" type="submit" color="yellow" onClick={this.autoToggle}>Toggle Auto-Mode</Button>
                    </div>
                </div>
         </Container>
        
         </React.Fragment>
        )
    }
}


export default Controls;