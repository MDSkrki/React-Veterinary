import { createStore } from "redux";

const initialState = {
    login: false,
    token: null
};

/**
 * 
 * @param {} state  inherits from initialState and should give a new reference based on it
 * @param {type: String, payload} action will have this shape
 */

const reducer = (state = initialState, action) => {

    if(action.type == "USER_LOGGED"){
        
        return {
            login : true,
            token : action.payload
        };
    }

    if(action.type == "USER_UNLOGGED"){
        return{
            login: false,
            token: null
        };
    }

};

export default createStore(reducer);