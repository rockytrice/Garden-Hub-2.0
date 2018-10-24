import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

    // by installing redux thunk  as a middleware it allows us to return a function with a single argument rather than an object.
    // now we can return either an action object or a function from our action creators.
    //  if we return a function, that function will be automatically be called with a dispatch function
    export const signup =(formProps) => async dispatch => {
        try {
            const response = await axios.post("http://localhost:3001/signup", formProps);
            //   make use of dispatch function.
            // pass in the action that we want to send to all the middlewares and reducers inside of the application 
            dispatch({type: AUTH_USER, payload: response.data.token});
            // callback();
       
     } catch (e) {
        //  call dispatch, and into that function pass the action that we want to send to all the middlewares and reducers inside the application
        dispatch ({type: AUTH_ERROR, payload: "Email in use"});
     }
  };
