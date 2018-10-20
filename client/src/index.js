import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from "./App";
// import Router1 from "./components/Router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import reducers from "./reducers"
import reduxThunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";

import Signup from "./components/pages/SignUp/SignUp"
import Welcome from "./components/pages/Welcome"
import "./index.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App> 
         <Route path="/" exact component = {Welcome} />
         <Route path ="/signup" component = {Signup} />
        </App>
    </BrowserRouter>
</Provider>, 
document.getElementById("root")
);

