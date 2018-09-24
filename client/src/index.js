import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Router from "./components/Router";
import "./index.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
