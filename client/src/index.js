import React from "react";
import ReactDOM from "react-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import App from "./App";
import Router1 from "./components/Router";

import "./index.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


ReactDOM.render(<Router1><App /></Router1>, document.getElementById("root"));

