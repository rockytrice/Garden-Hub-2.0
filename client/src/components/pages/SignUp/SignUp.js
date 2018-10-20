import React, { Component }from 'react';
import { reduxForm, Field} from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import {compose} from "redux";

// import { Mask, Row, Col, View, Container, } from 'mdbreact';
// import {Card, CardBody, Input,Fa,Button} from "mdbreact";
// import SocialIcon from "../SignIn/Icons"
// import Irrigationicon from "../../../images/Irrigationicon.png";
import './SignUp.css';

class SignUp extends Component {
// handler to watch for submission of the form.this will be called anytime the users submit the form 
// recieves all the props that the user entered in the form{email, password}
  onSubmit = (formProps) => {
    console.log(formProps);
    this.props.signup(formProps, ()=> {
      // automatically redirect user to dashboard page
      this.props.history.push("/feature");
    });
  }
  
    render(){
      // we need to make sure that anytime the user submits the form we call on submit.
      // so we make use of the redux form and we get a fuction on our private prop's object called handle submit. 
      // this is the function that we bave to call that's going to make sure that we take the email and password out of the form itself and provide it to our submit callback
      // before adding any callback directly to the form tag we have to restructure the handle Submit
      const { handleSubmit } = this.props;
      return(
        // note!! not putting on any parentheses here because we don't want to call on submit the instant we render this form instead we want to render it on the call submit at some point
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label>Email</label>
            <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
            />
          </fieldset>
          <fieldset>
          <label>Password</label>
          <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
          />
          </fieldset>
          <div>{this.props.errorMessage}</div>
          <button> Sign Up!</button>
        </form>   
       );
    }
  };

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}
// compose allows us to apply multiple higher order components to a sigle component with a more attractive syntax
//  inside of compose we can pass in as many higher order components as we wish and they will all be applied in series to whatever component we pass in at the last call down here. 
export default compose(
connect(mapStateToProps, actions),
reduxForm({form: "signup"}) 
)(SignUp);



// constructor() {
  //   super();
  //   this.state = {
  //     username: "",
  //     password: ""
  //   };
  // }
  // onChange = (e) => {
  //   const state = this.state
  //   state[e.target.name] = e.target.value;
  //   this.setState(state);
  // }

 /* // <div id="classicformpage">
      //       <View>
      //         <Mask className="d-flex justify-content-center align-items-center gradient">
      //           <Container>
      //             <form className="form-signin" onSubmit={this.onSubmit}>
      //             <Row>
      //               <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
      //                 <h1 className="h1-responsive font-weight-bold">Sign up right now! </h1>
      //                 <hr className="hr-light"/>
      //                 <h6 className="mb-4" >Garden Hub is an IOT application that directly controls a user’s home lawn/garden  irrigation system and monitors the immediate soil and climate with wirelessly transmitted sensor data.</h6>
      //                 <Button outline color="white">Learn More</Button>
      //               </div>
      //               <Col md="6" xl="5" className="mb-4">
      //               <Card id="classic-card">
      //                   <CardBody className="z-depth-2 white-text">
      //                     <h3 className="text-center"><Fa icon="user"/> Register:</h3>
      //                     <hr className="hr-light"/>
      //                       <Input label="Your email" icon="envelope" type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange}/>
      //                       <Input label="Your password" icon="lock" type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange}/>
      //                     <div className="text-center mt-4 black-text">
      //                       <Button outline color="white" type="submit">Sign Up</Button>
      //                         <hr className="hr-light"/>
      //                           <Col md="12">
      //                             <p className="font-small white-text d-flex justify-content-end">Have an account? <a href="/Login" className="green-text ml-1 font-weight-bold"> Log in</a></p>
      //                           </Col>
      //                         <SocialIcon />
      //                     </div>
      //                   </CardBody>
      //                 </Card>
      //               </Col>
      //             </Row>
      //             </form>
      //           </Container>
      //         </Mask>
      //       </View>
//     </div> */ 