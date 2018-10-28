
import React from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText,Col, Row, Button } from 'mdbreact';
import { subscribe } from "../../../../messages";


class Zone extends React.Component {
  constructor(props) {
	  super(props);

	  subscribe((err, msg) => this.setState({ 
		msg
		}));

	}

	state = {
		msg: 'no message yet',
	};
  render() {
    return (
  <section className="text-center my-5">
   <Row>
   <Col lg="4" md="12" className="mb-lg-0 mb-4">
   {/* buttons to trigger relay on and off */}
    <Button color="yellow">Relay On</Button>
    <Button color="yellow">Relay Off</Button>

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
          <CardText style={{fontSize: 30}}>25˚C</CardText>
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
          <CardText style={{fontSize: 30}}>45%</CardText>
    </CardBody>
  </Card>
 </Col>
  
  </Row>
 </section> 
   
    )
  }
}
export default Zone;
