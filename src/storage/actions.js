export const actionTypes = {
    SET_DATA: "SET_DATA",
    SET_LOGIN: "SET_LOGIN",
    SET_TOKEN: "SET_TOKEN",
    SET_REDIRECT_LOGIN:"SET_REDIRECT_LOGIN",
    SET_REDIRECT_LIST:"SET_REDIRECT_LIST",
}

export const setData = data => ({
    type: actionTypes.SET_DATA,
    data 
});

export const setLogin = data => ({
    type: actionTypes.SET_LOGIN,
    data 
});

export const setToken = data => ({
    type: actionTypes.SET_TOKEN,
    data 
});

export const setRedirectLogin = data => ({
    type: actionTypes.SET_REDIRECT_LOGIN,
    data 
});

export const setRedirectList = data => ({
    type: actionTypes.SET_REDIRECT_LIST,
    data 
});