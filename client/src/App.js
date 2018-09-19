import React, { Component } from "react";
import "./App.css";
import FormsPage from "./components/pages/FormsPage";
class App extends Component {
  render() {
    return (
      <div className="signup-form">
      <FormsPage />        
      </div>
    );
  }
}

export default App;
