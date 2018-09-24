import React from "react";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import Login from "./pages/SignIn/LoginPage";
import App from "../App";
import DashBoard from "./pages/DashboardPage/Dashboard";
import InfoPage from "./pages/AboutPage/About";

const Router = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={App} />
        <Route  path= "/Login" component = {Login} />
        <Route path="/DashBoard" component= {DashBoard} />
        <Route path="/About" component= {InfoPage} /> 
        </Switch>
    </BrowserRouter>
)

export default Router;