import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Mask, Row, Col, Fa, Button, View, Container, Card, CardBody, Input,  } from 'mdbreact';
import './SignUp.css'

class SignUpPage extends React.Component {
  constructor(props) {
    // eslint-disable-next-line
    super(props),
    this.state = {
      collapse : false
    }
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  handleNavbarClick(){
    this.setState({
      collapse: false
    });
  }
  render(){
  const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
    return (
      <div id="classicformpage">
        <Router>
          <div>
            <Navbar dark expand="md" fixed="top" scrolling>
              <Container>
                <NavbarBrand>
                  <strong className="white-text" style={{fontFamily: "GardenPartySans", fontSize:26}}>Garden Hub</strong>
                </NavbarBrand>
                <NavbarToggler onClick = { this.onClick } />
                <Collapse isOpen = {this.state.collapse} navbar>
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="/">Login</NavLink>
                    </NavItem>
                  </NavbarNav>
                  <NavbarNav right >
                    <NavItem>
                      
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>
          { this.state.collapse && overlay}
          </div>
        </Router>

        <View>
          <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold animated fadeInLeftBig">Sign up right now! </h1>
                  <hr className="hr-light"/>
                  <h6 className="mb-4 animated fadeInLeftBig" >Garden Hub is an IOT application that directly controls a user’s home lawn/garden  irrigation system and monitors the immediate soil and climate with wirelessly transmitted sensor data.</h6>
                  <Button outline color="white" className="animated fadeInLeftBig">Learn More</Button>
                </div>
                <Col md="6" xl="5" className="mb-4">
                  <Card id="classic-card"className="animated zoomInLeft">
                    <CardBody className="z-depth-2 white-text">
                      <h3 className="text-center"><Fa icon="user"/> Register:</h3>
                      <hr className="hr-light"/>
                      <Input label="Your name" icon="user"/>
                      <Input label="Your email" icon="envelope"/>
                      <Input label="Your password" icon="lock" type="password"/>
                      <div className="text-center mt-4 black-text">
                        <Button outline color="white">Sign Up</Button>
                        <hr className="hr-light"/>
                        <div className="text-center d-flex justify-content-center white-label">
                          <a className="p-2 m-2">
                            <Fa icon="twitter" className="white-text"/>
                          </a>
                          <a className="p-2 m-2">
                            <Fa icon="linkedin" className="white-text"/>
                          </a>
                          <a className="p-2 m-2">
                            <Fa icon="instagram" className="white-text"/>
                          </a>
                        </div>
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
  }
};


export default SignUpPage;




