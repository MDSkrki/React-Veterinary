import { createStore } from "redux";

const initialState = {
    login: false
}

/**
 * 
 * @param {} state  inherits from initialState and should give a new reference based on it
 * @param {type: String, payload} action will have this shape
 */

const reducer = (state = initialState, action) => {

    if(action.type == "USER_LOGGED"){
        return {login : true}
    }


}

export default createStore(reducer)