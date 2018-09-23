import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Router from "./components/Router";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
