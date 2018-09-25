import React, { Component }from 'react';
import axios from "axios";
import { Mask, Row, Col, View, Container, } from 'mdbreact';
import {Card, CardBody, Input,Fa,Button} from "mdbreact";
import SocialIcon from "../SignIn/Icons"
// import Irrigationicon from "../../../images/Irrigationicon.png";
import './SignUp.css';


class SignUpPage extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post("/api/auth/register", { username, password })
      .then((result) => {
        window.location.href = "/Login";
      });
  }


    render(){
      const { username, password } = this.state;
      return(
          <div id="classicformpage">
            <View>
              <Mask className="d-flex justify-content-center align-items-center gradient">
                <Container>
                  <form className="form-signin" onSubmit={this.onSubmit}>
                  <Row>
                    <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                      <h1 className="h1-responsive font-weight-bold">Sign up right now! </h1>
                      <hr className="hr-light"/>
                      <h6 className="mb-4" >Garden Hub is an IOT application that directly controls a user’s home lawn/garden  irrigation system and monitors the immediate soil and climate with wirelessly transmitted sensor data.</h6>
                      <Button outline color="white">Learn More</Button>
                    </div>
                    <Col md="6" xl="5" className="mb-4">
                    <Card id="classic-card">
                        <CardBody className="z-depth-2 white-text">
                          <h3 className="text-center"><Fa icon="user"/> Register:</h3>
                          <hr className="hr-light"/>
                            <Input label="Your name" icon="user" />
                            <Input label="Your email" icon="envelope" type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange}/>
                            <Input label="Your password" icon="lock" type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange}/>
                          <div className="text-center mt-4 black-text">
                            <Button outline color="white" type="submit">Sign Up</Button>
                              <hr className="hr-light"/>
                                <Col md="12">
                                  <p className="font-small white-text d-flex justify-content-end">Have an account? <a href="/Login" className="green-text ml-1 font-weight-bold"> Log in</a></p>
                                </Col>
                              <SocialIcon />
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  </form>
                </Container>
              </Mask>
            </View>
          </div>
      )
      }
  };




export default SignUpPage;




