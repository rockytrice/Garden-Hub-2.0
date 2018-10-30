
import React from 'react';
import socketIOClient from "socket.io-client";
import { Card, CardBody, CardImage, CardTitle, CardText,Col, Row, Button } from 'mdbreact';
//import { subscribe } from "../../../../messages";


class Zone extends React.Component {
  constructor(props) {
	  super(props);

    /*
    subscribe((err, msg) => this.setState({ 
		msg
		}));
    
	}

	state = {
		//msg: 'no message yet',
  };
  */

 this.state ={
  response2: false,
  tempGraph: false,
  endpoint: 'http://localhost:3001'
}

}

relayOn = () => {
const { endpoint } = this.state;
const socket = socketIOClient(endpoint);
console.log('button clicked');
socket.emit('btn', 'button clicked!!');
}

relayOff = () => {
  const { endpoint } = this.state;
  const socket2 = socketIOClient(endpoint);
  console.log('button clicked');
  socket2.emit('btn2', 'button2 clicked!!');
}


componentDidMount() {
  const { endpoint } = this.state;
  //as soon as the react component gets mounted, the componentDidMount creates a new connection to out Sokcet.io server by instantiating a new socket
  const socket3 = socketIOClient(endpoint);
  //socket.on('temperatures', data => this.setState({ response: data}));
  socket3.on('moistures', data => this.setState({response2: data }));
  socket3.on('temperatures', data2 => this.setState({tempGraph: data2}));
}


  render() {//DataTransferItemList
    const { response2 } = this.state;
    const { tempGraph } = this.state;
    return (
  <section className="text-center my-5">
   <Row>
   <Col lg="4" md="12" className="mb-lg-0 mb-4">
   {/* buttons to trigger relay on and off */}
    <Button color="yellow" type="button" onClick={this.relayOn}>Relay On</Button>
    <Button color="yellow" type="button" onClick={this.relayOff}>Relay Off</Button>

  </Col>
  <Col lg="4" md="12" className="mb-lg-0 mb-4">
  <Card cascade>
    <CardImage cascade tag="div">
        <div className="heading2" style={{background: "#ffbb33"}}>
            <h2 className="h2-responsive">Temperature</h2>
            <p></p>
        </div>
      </CardImage>
      <CardBody cascade>
          <CardTitle>{this.state.temp}</CardTitle>
          <CardText style={{fontSize: 30}}><span>{ tempGraph }&#176;F</span></CardText>
      </CardBody>
    </Card>
   </Col>
   <Col lg="4" md="12" className="mb-lg-0 mb-4">
  <Card cascade>
    <CardImage cascade tag="div">
        <div className="heading2" style={{background: "#ffbb33"}}>
            <h2 className="h2-responsive">Soil Moisture</h2>
        </div>
    </CardImage>
    <CardBody cascade>
          <CardTitle>{this.state.moist}</CardTitle>
          <CardText style={{fontSize: 30}} ><span>{ response2 }%</span></CardText>
    </CardBody>
  </Card>
 </Col>
  
  </Row>
 </section> 
   
    )
  }
}
export default Zone;
