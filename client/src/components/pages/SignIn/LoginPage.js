import React, {Component} from 'react';
import { Mask, Row, Col,  View, Container } from 'mdbreact';
//import CardLogin from "./LoginCard";
import {Card, CardBody, Input,Fa,Button} from "mdbreact";
import SocialIcon from "./Icons"
import Irrigationicon from "../../../images/Irrigationicon.png";
class LoginPage extends Component (

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: ""
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

    axios.post("/api/auth/login", { username, password })
      .then((result) => {
        localStorage.setItem("jwtToken", result.data.token);
        this.setState({ message: "" });
        this.props.history.push("/")
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: "Login failed. Username or password not match" });
        }
      });
  }


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
                <Card id="classic-card" style={{marginTop:61}} >
                  <CardBody className="z-depth-2 white-text">
                  <h3 className="text-center"><Fa icon="user"/> Login:</h3>
                    <hr className="hr-light"/>
                    <Input label="Your email" icon="envelope"/>
                    <Input label="Your password" icon="lock" type="password"/>
                      <div className="text-center mt-4 black-text">
                        <Button outline color="white">Login</Button>
                        <hr className="hr-light"/>
                          <SocialIcon />
                      </div>
                  </CardBody>
                </Card>  
                </Col>
              </Row>
            </Container>
          </Mask>
        </View>
        </div>
    );
export default LoginPage;