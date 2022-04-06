
const actionCreator = (type, payload)=>{
    
    if (!payload){
        return {type:type}
    }
    return {type:type, payload:payload};
};


export { actionCreator };