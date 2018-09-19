import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/pages/SignUp";
class App extends Component {
  render() {
    return (
      <div className="signup-form">
      <SignUp />        
      </div>
    );
  }
}

export default App;
