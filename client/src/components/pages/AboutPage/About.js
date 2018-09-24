import React from 'react';
import { Container, Row, Col, Card, CardBody, Mask, View,} from 'mdbreact';
import TeamPage from "../../TeamCard";
import FooterPage from "../../Footer";
import "./About.css";
import NavBar from "../../Navbar";
import Summary from "./AboutSummary";



const InfoPage = () =>  {
  return(
    <React.Fragment>
    <NavBar />
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
