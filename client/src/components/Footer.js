import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="success-color-dark" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                    <Col sm="6">
                        <h5 className="title">Footer Content</h5>
                        <p>Here you can use rows and columns here to organize your footer content.</p>
                    </Col>
                    <Col sm="6">
                        <h5 className="title">Links to some of the products used</h5>
                        <ul>
                        <li className="list-unstyled"><a href="https://www.amazon.com/UTL-version-ESP-12E-ESP-12F-wireless/dp/B07F7H547B/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1538067496&sr=1-2&keywords=esp12e&dpID=41hxeZuQZSL&preST=_SY300_QL70_&dpSrc=srch">esp8266 Wireless Module</a></li>
                        <li className="list-unstyled"><a href="https://www.dfrobot.com/product-599.html">Gravity: Analog Soil Moisture Sensor For Arduino</a></li>
                        <li className="list-unstyled"><a href="https://www.dfrobot.com/product-164.html">Gravity: DS18B20 Temperature Sensor</a></li>
                        {/* <li className="list-unstyled"><a href="#!">Link 4</a></li> */}
                        </ul>
                    </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <span className="copyright-style" style={{fontFamily: "GardenPartySans"}}> GardenHub 2.0 </span>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;