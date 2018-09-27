import React from 'react';
import { Col, Container, Row, Footer,Fa } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="blue-grey" className="page-footer font-small lighten-5 pt-0">
          <div style={{backgroundColor: '#21d192'}}>
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
                  <h6 className="text-uppercase font-weight-bold"><strong>Company name</strong></h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                  <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit.</p>
              </Col>
              <Col md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
                  <h6 className="text-uppercase font-weight-bold"><strong>Products</strong></h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                  <p><a href="#!" className="dark-grey-text">MDBootstrap</a></p>
                  <p><a href="#!" className="dark-grey-text">MDWordPress</a></p>
                  <p><a href="#!" className="dark-grey-text">BrandFlow</a></p>
                  <p><a href="#!" className="dark-grey-text">Bootstrap Angular</a></p>
              </Col>
              <Col md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
                  <h6 className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                  <p><a href="#!" className="dark-grey-text">Your Account</a></p>
                  <p><a href="#!" className="dark-grey-text">Become an Affiliate</a></p>
                  <p><a href="#!" className="dark-grey-text">Shipping Rates</a></p>
                  <p><a href="#!" className="dark-grey-text">Help</a></p>
              </Col>
              <Col md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                  <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                  <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
                  <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
                &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </Container>
          </div>
        </Footer>
            // <Footer color="success-color-dark" className="font-small pt-4 mt-4">
            //     <Container fluid className="text-center text-md-left">
            //         <Row>
            //         <Col lg="4">
            //             {/* <h5 className="title">Footer Content</h5>
            //             <p>Here you can use rows and columns here to organize your footer content.</p> */}
            //         </Col>
            //         <Col lg="4">
            //             <h5 className="title">Links to some of the products used</h5>
            //             <ul>
            //             <li className="list-unstyled"><a href="https://www.amazon.com/UTL-version-ESP-12E-ESP-12F-wireless/dp/B07F7H547B/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1538067496&sr=1-2&keywords=esp12e&dpID=41hxeZuQZSL&preST=_SY300_QL70_&dpSrc=srch">esp8266 Wireless Module</a></li>
            //             <li className="list-unstyled"><a href="https://www.dfrobot.com/product-599.html">Gravity: Analog Soil Moisture Sensor For Arduino</a></li>
            //             <li className="list-unstyled"><a href="https://www.dfrobot.com/product-164.html">Gravity: DS18B20 Temperature Sensor</a></li>
            //             </ul>
            //         </Col>
            //         </Row>
            //     </Container>
            //     <div className="footer-copyright text-center py-3">
            //         <Container fluid>
            //             &copy; {(new Date().getFullYear())} Copyright: <span className="copyright-style" style={{fontFamily: "GardenPartySans"}}> GardenHub 2.0 </span>
            //         </Container>
            //     </div>
            // </Footer>
        );
    }
}

export default FooterPage;