import React from 'react';
import { Mask, Row, Col,  View, Container } from 'mdbreact';
import CardLogin from "./LoginCard";
const LoginPage = () => (
  <div id="classicformpage">
        <View>
          <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold ">Welcome Back! </h1>
                  <hr className="hr-light"/>
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