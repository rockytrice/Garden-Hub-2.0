import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from "./App";
import {BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import reducers from "./reducers"
import reduxThunk from "redux-thunk";
import Signup from "./components/pages/SignUp/SignUp";
import Dashboard from "./components/pages/DashboardPage/Dashboard";
import Signout from "./components/pages/Signout";
import Signin from "./components/pages/SignIn/LoginPage";
import InfoPage from "./components/pages/AboutPage/About"
import Controls from "./components/pages/MQTTControllers/ControlPage"
import "./index.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


const store = createStore(
    reducers,
    {
        // pass in the key of Auth and then the value we want to intialize when we create our redux store which is authenticated.
        // then assign whatever i get from localStorage.getItem.
        // So now any time our application starts up we're going to check to see if we have a stored token and if we do we'll start up the redux state with that token as our auth.authenticated property 
        auth: { authenticated: localStorage.getItem("token") }
    },
    // middleware
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
<Provider store={store}>
    <Router>     
        <App>
            <Route exact path="/"  component={Signup} />
            <Route path="/signup" component={Signup} />
            <Route path ="/signin" component={Signin} />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path ="/signout" component ={Signout} />
            <Route path ="/about" component ={InfoPage} />
            <Route path ="/controls" component ={Controls} />
        </App>    
    </Router>
</Provider>,
document.getElementById("root")
);

