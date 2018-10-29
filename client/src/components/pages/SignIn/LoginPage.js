import React, { Component }from 'react';
import { reduxForm, Field} from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import {compose} from "redux";
import  "../SignUp/SignUp.css";
import { Card,Mask, CardBody,Row,Fa, Col, View, Container, Button } from 'mdbreact';
import SocialIcon from "../SignIn/Icons"
import Irrigationicon from "../../../images/Irrigationicon.png";
// import "./Login.css";


class Signin extends Component {
  // handler to watch for submission of the form.this will be called anytime the users submit the form 
// recieves all the props that the user entered in the form{email, password}
  onSubmit = (formProps) => {
   console.log(formProps);
   this.props.signin(formProps, () => {
   // automatically redirect user to dashboard page
     this.props.history.push("/dashboard");
   });
  };
  render() {
    // we need to make sure that anytime the user submits the form we call on submit.
      // so we make use of the redux form and we get a fuction on our private prop's object called handle submit. 
      // this is the function that we bave to call that's going to make sure that we take the email and password out of the form itself and provide it to our submit callback
      // before adding any callback directly to the form tag we have to restructure the handle Submit
      const { handleSubmit } = this.props;
      return (
        <div id ="classicformpage">
        <View>
            <Mask className="d-flex justify-content-center align-items-center gradient">
              <Container>
                <form className="form-signin" onSubmit={handleSubmit(this.onSubmit)}>
                  <Row>
                    <div className="white-text text-center   text-md-left col-md-6 mt-xl-5 mb-5">
                    <img className="login-pic" src={Irrigationicon} width="500" height="400" alt="logo"/>
                    </div>
                    <Col md="6" xl="5" className="mb-4">
                    <Card id="classic-card" style={{marginTop:61}} >
                      <CardBody className="z-depth-2 white-text">
                      <h3 className="text-center"><Fa icon="user"/> Login:</h3>
                        <hr className="hr-light"/>
                        <fieldset>
                          <label>Email</label>
                          <div>
                            <Field
                              name="email"
                              type="text"
                              component="input"
                              autoComplete="none"
                              />
                         </div>
                        </fieldset>
                        <fieldset>
                          <label>Password</label>
                          <div>
                            <Field
                              name="password"
                              type="password"
                              component="input"
                              autoComplete="none"
                              />
                          </div>
                        </fieldset>
                          <div className="text-center mt-4 black-text">
                          <div>{this.props.errorMessage}</div>
                          <Button outline color="white" type="submit">Sign In</Button>       <hr className="hr-light"/>
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

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}
// compose allows us to apply multiple higher order components to a sigle component with a more attractive syntax
//  inside of compose we can pass in as many higher order components as we wish and they will all be applied in series to whatever component we pass in at the last call down here. 
export default compose(
connect(mapStateToProps, actions),
reduxForm({form: "signin"}) 
)(Signin);




