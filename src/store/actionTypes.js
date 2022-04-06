import {USER_LOGGED} from './types.js'

const userLogged = (payload)=>{    //el payload se lo pasamos por el container donde tenemos la funcion
    return {type: USER_LOGGED, payload:payload};
};


const actionCreator = (type, payload)=>{
    
    if (!payload){
        return {type:type}
    }
    return {type:type, payload:payload};
};


export {userLogged, actionCreator};