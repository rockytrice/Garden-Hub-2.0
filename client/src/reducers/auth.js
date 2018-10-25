import { AUTH_USER, AUTH_ERROR} from "../actions/types";

const INITIAL_STATE = {
    authenticated: "",
    errorMessage: "",
};

// update authenticated property. 
// note. there is no idea of signing up and getting a token inside of the app from the reducer standpoint. all this reducer cares about is getting the authenticated piece of state.
export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_USER:
        // return all properties inside of state object along with authenticated(which is the JWT) that we just put on the action payload property
          return {...state, authenticated: action.payload };
         case AUTH_ERROR:
         return {...state, errorMessage: action.payload };
        default:
          return state;
    }
}