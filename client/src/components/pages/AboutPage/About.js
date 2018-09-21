import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Mask, View,} from 'mdbreact';

const InfoPage = () =>  {
  return(
    <Container>
      <Row>
        <Col md="12">
          <Card reverse>
            <View cascade hover waves>
              <img src="https://cdn-images-1.medium.com/max/1600/1*1gdLYPB6XiDPFv2B_lnkSw.png" className="img-fluid" alt="iot controller"/>
              <Mask overlay="white-slight" className="waves-light"/>
            </View>
            <CardBody cascade className="text-center">
              <h2 className="font-weight-bold"><a>Our Mission</a></h2>
             
            </CardBody>
          </Card>
          <Container className="mt-5">
            <p>This application directly controls a user’s home lawn/garden  irrigation system and monitors the immediate soil and climate with wirelessly transmitted sensor data. The user must follow a simple set of instructions for attaching the GardenHub-Controller to their previous irrigation controller, and they must also place the soil sensors throughout the `zones` of their lawn/garden. After installing the hardware the application will automatically switch the irrigation system on and off in response to measured soil moisture level of each zone. The user of course can select to manually switch their irrigation on/off or preset timers for their irrigation if they would like; however the core concept is that the automated mode relieves the chore of setting timers while also, most importantly, improves water use efficiency.
            </p>
            <p>Automation Method & Benefits:The user sets a moisture max and minimum level to regulate the cycle of adding or allowing water to drain from the soil. When the minimum level of moisture is reached the water is turned on till the maximum level is reached. Then the water is shut off until the minimum permitted moisture level is achieved again. The cyclical nature of the watering will ensure the roots are provided with the water they need as well as the oxygen need. The oxygen is pulled down to the roots by the evacuating water.
            </p>
          </Container>
        </Col>
      </Row>
      <hr className="mb-5 mt-4"/>
      
    </Container>
  );
}
export default InfoPage;
