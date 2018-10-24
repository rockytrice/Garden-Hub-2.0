import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from "./App";
import Welcome from "./components/pages/Welcome";
import {BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import reducers from "./reducers"
import reduxThunk from "redux-thunk";
import Signup from "./components/pages/SignUp/SignUp";

import "./index.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const store = createStore(
    reducers,
    {},
    // middleware
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
<Provider store={store}>
    <Router>     
        <App>
            <Route exact path="/"  component={Welcome} />
            <Route path="/signup" component={Signup} />
        </App>    
    </Router>
</Provider>,
document.getElementById("root")
);

