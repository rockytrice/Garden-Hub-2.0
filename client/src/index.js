import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from "./App";
import {Router, Route, IndexRoute, browserHistory } from react-router
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import reducers from "./reducers"
import reduxThunk from "redux-thunk";


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
    <Router history = {browserHistory}>
      <Route path="/"  component = {App} />    
    </Router>
</Provider>, 
document.getElementById("root")
);

