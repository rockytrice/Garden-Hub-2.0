import React from "react";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import SignUp from "./SignUp/SignUp";

const Router = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="./LoginPage/LoginPage" component={LoginPage} />
        <Route exact path= "./SignUp/SignUp" component = {SignUp} />
        </Switch>
    </BrowserRouter>
)

export default Router;