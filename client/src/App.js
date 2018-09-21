import React, { Component } from "react";
import "./App.css";
// import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUp"
// import Dashboard from "./components/pages/DashboardPage"
// import DoubleNavigationPage from "./components/Navbar/Navbar"

class App extends Component {
  render() {
    return (
      <div>
      {/* <LoginPage /> */}
      <SignUpPage />
      {/* <DoubleNavigationPage />
      <Dashboard /> */}
     </div> 

    );
  }
}

export default App;
