import React, { Component } from "react";
// import reactDom from "react-dom";
//import { link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import SignUpPage from "./components/pages/SignUp"
import { subscribe } from './messages';
class App extends Component {

  
	constructor(props) {
	  super(props);

	  subscribe((err, msg) => this.setState({ 
		msg
		}));

	}

	state = {
		msg: 'no message yet',
	};

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/DashBoard')
  }
  

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

//	The message: {this.state.msg}
   render() {
    return (
      <div>
        <SignUpPage/>
      </div>
    );
  }
}

export default App;
