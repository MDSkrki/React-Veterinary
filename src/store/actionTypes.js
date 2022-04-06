const actionCreator = (type, payload) => {
    return !payload ? {type} : {type, payload}
};

export { actionCreator };