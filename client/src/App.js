import React, { Component } from "react";
import "./App.css";
// import SignUp from "./components/pages/SignUp";
import LoginPage from "./components/pages/LoginPage"
class App extends Component {
  render() {
    return (
      <div className="signup-form">
     <LoginPage />
      </div>
    );
  }
}

export default App;
