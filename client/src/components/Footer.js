import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import "./footer.css";

class FooterPage extends React.Component {
    render(){
        return(
        <Footer color="blue-grey" className="page-footer font-small lighten-5 pt-0">
          <div style={{backgroundColor: '#757575 '}}>
            <Container>
              <Row className="py-4 d-flex align-items-center">
                <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                </Col>
                <Col md="6" lg="7" className="text-center text-md-right">
                  <a className="fb-ic ml-0"><i className="fa fa-facebook white-text mr-lg-4"> </i></a>
                  <a className="tw-ic"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>
                  <a className="gplus-ic"><i className="fa fa-google-plus white-text mr-lg-4"> </i></a>
                  <a className="li-ic"><i className="fa fa-linkedin white-text mr-lg-4"> </i></a>
                  <a className="ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
                </Col>
              </Row>
            </Container>
          </div>
          <Container className="mt-5 mb-4 text-center text-md-left">
            <Row className="mt-3">
              <Col md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                  {/* <h6 className="text-uppercase font-weight-bold"><strong>IOT Guys</strong></h6>
                   <hr className="yellow-accent mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px",backgroundColor:"#ffbb33"}}/> 
                   */}
              </Col>
              <Col md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
                  <h6 className="text-uppercase font-weight-bold"><strong>Products</strong></h6>
                  <hr className="yellow-accent mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px",backgroundColor:"#ffbb33"}}/>
                  <p><a href="https://www.amazon.com/UTL-version-ESP-12E-ESP-12F-wireless/dp/B07F7H547B/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1538067496&sr=1-2&keywords=esp12e&dpID=41hxeZuQZSL&preST=_SY300_QL70_&dpSrc=srch" className="dark-grey-text">esp8266 Wireless Module</a></p>
                  <p><a href="https://www.dfrobot.com/product-599.html" className="dark-grey-text">Gravity: Analog Soil Moisture Sensor For Arduino</a></p>
                  <p><a href="https://www.dfrobot.com/product-164.html" className="dark-grey-text">Gravity: DS18B20 Temperature Sensor</a></p>
              </Col>
              <Col md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
                  <h6 className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                  <hr className="yellow-accent mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px",backgroundColor:"#ffbb33"}}/>
                  <p><a href="#!" className="dark-grey-text">Your Account</a></p>
                  <p><a href="#!" className="dark-grey-text">Become an Affiliate</a></p>
              </Col>
              <Col md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                  <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                  <hr className="yellow-accent mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor:"#ffbb33"}}/>
                  <p><i className="fa fa-home mr-3"></i> Orlando, FL 32801 US</p>
                  <p><i className="fa fa-envelope mr-3"></i> Iot_Guys@example.com</p>
                  <p>
                <i className="fa fa-phone mr-3" /> + 01 234 567 88
                  </p>
                  
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3" style={{backgroundColor:"#212121"}}>
            <Container fluid>
                &copy; {(new Date().getFullYear())} Copyright: <span className="copyright-style" style={{fontFamily: "GardenPartySans",fontSize:"20px",color:"#ffffff",fontWeight:"bolder"}}> GardenHub 2.0 </span>
            </Container>
          </div>
        </Footer>
            
        );
    }
}

export default FooterPage;