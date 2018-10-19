import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from "./App";
import Router1 from "./components/Router";
import { Provider } from "react-redux";
import { createStore} from "redux";

import reducers from "./reducers"
import "./index.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


ReactDOM.render(
<Provider store={createStore(reducers, {})}>
    <Router1>
        <App />
    </Router1>
</Provider>, 
document.getElementById("root")
);

