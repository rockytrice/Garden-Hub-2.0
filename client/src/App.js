import React, { Component } from "react";
import reactDom from "react-dom";
//import { link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import InfoPage from "./components/pages/AboutPage/About"
import SignUpPage from "./components/pages/SignUp"

class App extends Component {

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/DashBoard')
  }
  

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }


   render() {
    return (
      <div>
        <SignUpPage/>
      </div>
    );
  }
}

export default App;
