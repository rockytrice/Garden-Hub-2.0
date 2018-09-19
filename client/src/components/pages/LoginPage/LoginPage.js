import React from "react";
import "./LoginPage.css";
import { Container, Row, Col, Input, Button, Card, CardBody, } from 'mdbreact';

class LoginPage extends React.Component  {
  render() {
    return(
      <Container >
        <section className="form-dark">
          <Row>
            <Col md="5">
              <CardBody>
               <Card className="card-image" style={{backgroundColor: 'transparent'}}>
                 <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                   <div className="text-center">
                     <h3 className="white-text mb-5 mt-4 font-weight-bold"><strong>Login</strong> <a className="green-text font-weight-bold"><strong> In</strong></a></h3>
                   </div>
                   <Input label="Your email" group type="text" validate />
                   <Input label="Your password" group type="password" validate/>
                   <div className="md-form pb-3">
                    
                   </div>
                   <Row className="d-flex align-items-center mb-4">
                     <div className="text-center mb-3 col-md-12">
                       <Button color="success" rounded type="button" className="btn-block z-depth-1">Login</Button>
                     </div>
                   </Row>
                   {/* <Col md="12">
                     <p className="font-small white-text d-flex justify-content-end">Have an account? <a href="/" className="green-text ml-1 font-weight-bold"> Log in</a></p>
                   </Col> */}
                  </div>
               </Card>
              </CardBody>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
};

export default LoginPage;