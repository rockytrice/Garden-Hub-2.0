import React from "react";
//import { link } from "react-router-dom";
// import axios from "axios";
import "./App.css";
// import SignUpPage from "./components/pages/SignUp"
import Header from "./components/Header";

export default ({ children }) => {

//	The message: {this.state.msg}
   
    return (
      <div>
        <Header/>
         {children}
      </div>
    );
  };




