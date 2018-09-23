import React from "react";
import { Card, CardBody, Input,Button,Col,Fa} from "mdbreact";

const SignUpCard = () =>(
<Card id="classic-card">
                    <CardBody className="z-depth-2 white-text">
                      <h3 className="text-center"><Fa icon="user"/> Register:</h3>
                      <hr className="hr-light"/>
                      <Input label="Your name" icon="user"/>
                      <Input label="Your email" icon="envelope"/>
                      <Input label="Your password" icon="lock" type="password"/>
                      <div className="text-center mt-4 black-text">
                        <Button outline color="white">Sign Up</Button>
                        <hr className="hr-light"/>
                        <Col md="12">
                    <p className="font-small white-text d-flex justify-content-end">Have an account? <a href="/Login" className="green-text ml-1 font-weight-bold"> Log in</a></p>
                  </Col>
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

)
export default SignUpCard;