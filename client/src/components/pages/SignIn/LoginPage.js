import React from 'react';
import { Mask, Row, Col,  View, Container } from 'mdbreact';
import CardLogin from "./LoginCard";
import Irrigationicon from "../../../images/Irrigationicon.png";
const LoginPage = () => (
  <div id="classicformpage">
        <View>
          <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center   text-md-left col-md-6 mt-xl-5 mb-5">
                <h1 className="pic-header" style={{fontFamily:"GardenPartySans", textAlign:"center",fontSize:50, fontWeight:"bolder"}}>GardenHub 2.0</h1>
                <img src={Irrigationicon} width="500" height="400" />
                </div>
                <Col md="6" xl="5" className="mb-4">
                  <CardLogin />
                </Col>
              </Row>
            </Container>
          </Mask>
        </View>
        </div>
    );
export default LoginPage;