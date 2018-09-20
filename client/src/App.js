import React, { Component } from "react";
import "./App.css";
// import SignUp from "./components/pages/SignUp"
import Dashboard from "./components/pages/DashboardPage"
import DoubleNavigationPage from "./components/Navbar/Navbar"

class App extends Component {
  render() {
    return (
      <div>
      <DoubleNavigationPage />
      <Dashboard />
     </div> 

    );
  }
}

export default App;
