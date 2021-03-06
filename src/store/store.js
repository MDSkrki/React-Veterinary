import { createStore } from "redux";
import { CLOSE_BANNER, PET_REGISTER, USER_LOGGED, USER_UNLOGGED } from "./types";

const initialState = {
    login: false,
    token: null,
    id: 0,
    petRegister: false,
    banner: false
};

/**
 * 
 * @param {} state  inherits from initialState and should give a new reference based on it
 * @param {type: String, payload:{property1,property2}} action will have this shape
 */

const reducer = (state = initialState, action) => {

    if (action.type == USER_LOGGED) {
        return {
            ...state,
            login: true,
            token: action.payload.token,
            id: action.payload.id
        };
    }

    if (action.type == USER_UNLOGGED) {
        return {
            ...state,
            login: false,
            token: null,
            id: 0
        };
    }

    if (action.type == PET_REGISTER) {
        return {
            ...state,
            petRegister: true,
            banner: true
        };
    }

    if (action.type == CLOSE_BANNER) {
        return {
            ...state,
            banner: false
        };
    }
    return state;
};

export default createStore(reducer);