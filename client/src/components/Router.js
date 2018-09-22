import React from "react";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import Login from "./pages/SignIn/LoginPage";
import SignUpPage from "./pages/SignUp/SignUp";

const Router = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={SignUpPage} />
        <Route  path= "/Login" component = {Login} />
        </Switch>
    </BrowserRouter>
)

export default Router;