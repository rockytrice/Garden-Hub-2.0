import axios from "axios";
import { AUTH_USER } from "./types";

    // by installing redux thunk  as a middleware it allows us to return a function with a single argument rather than an object.
    // now we can return either an action object or a function from our action creators.
    //  if we return a function, that function will be automatically be called with a dispatch function
    export const signup = ({ formProps }) => dispatch => {
        axios.post("http://localhost:3001/signup", formProps);
    };
