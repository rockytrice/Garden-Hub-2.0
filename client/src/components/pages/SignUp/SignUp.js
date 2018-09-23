import React from 'react';
import { Mask, Row, Col, Fa, Button, View, Container, } from 'mdbreact';
import './SignUp.css'
import SignUpCard from "./RegisterCard";
const SignUpPage = ()=> (
      <div id="classicformpage">
        <View>
          <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold">Sign up right now! </h1>
                  <hr className="hr-light"/>
                  <h6 className="mb-4" >Garden Hub is an IOT application that directly controls a user’s home lawn/garden  irrigation system and monitors the immediate soil and climate with wirelessly transmitted sensor data.</h6>
                  <Button outline color="white">Learn More</Button>
                </div>
                <Col md="6" xl="5" className="mb-4">
                  <SignUpCard />
                </Col>
              </Row>
            </Container>
          </Mask>
        </View>
      </div>
    );




export default SignUpPage;




