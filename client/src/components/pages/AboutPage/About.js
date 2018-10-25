import React from 'react';
import { Container, Row, Col, Card, CardBody, Mask, View,} from 'mdbreact';
import TeamPage from "../../TeamCard";
import FooterPage from "../../Footer";
import "./About.css";
import Summary from "./AboutSummary";
import iotcontroller from "../../../images/iotcontroller.png"


const InfoPage = () =>  {
  return(
    <React.Fragment>
    <Container>
      <Row>
        <Col md="12">
          <Card reverse>
            <View cascade hover waves>
              <img src={iotcontroller} className="img-fluid" alt="iot controller"/>
              <Mask overlay="white-slight" className="waves-light"/>
            </View>
            <CardBody cascade className="text-center">
              <h2 className="font-weight-bold">Our Mission</h2>           
            </CardBody>
          </Card>
          <Summary />
        </Col>
      </Row>
      <TeamPage />
    </Container>
    <FooterPage />
  </React.Fragment>
  );
}
export default InfoPage;
