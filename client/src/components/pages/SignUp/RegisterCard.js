import React from "react";
import { Card, CardBody, Input,Button,Col,Fa} from "mdbreact";
import SocialIcon from "../SignIn/Icons";


const SignUpCard = () =>(
<Card id="classic-card">
  <CardBody className="z-depth-2 white-text">
    <h3 className="text-center"><Fa icon="user"/> Register:</h3>
    <hr className="hr-light"/>
      <Input label="Your email" icon="envelope"/>
      <Input label="Your password" icon="lock" type="password"/>
    <div className="text-center mt-4 black-text">
      <Button outline color="white">Sign Up</Button>
        <hr className="hr-light"/>
          <Col md="12">
            <p className="font-small white-text d-flex justify-content-end">Have an account? <a href="/Login" className="green-text ml-1 font-weight-bold"> Log in</a></p>
          </Col>
        <SocialIcon />
    </div>
  </CardBody>
</Card>

)
export default SignUpCard;