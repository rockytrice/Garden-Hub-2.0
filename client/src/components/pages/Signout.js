import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Signup from "./SignUp/SignUp";

class Signout extends Component {
    // live cycle method.
    // the instance this component appears on the screen
    componentDidMount(){
        // call this.props.signout action creator. This will attempt to sign our user out of our application entirely by removing the authenticated JWT out of the reducer and by clearing the localStorage token key.
        this.props.signout();
    }
    render (){
        return (
            <Signup />
            // <div>Sorry to see you go</div>
        )
    }
}
// set up connect helper. there is no mapState to props function here so the first argument will be null, and then as a second argument pass in all of the actions.
export default connect(null, actions)(Signout);