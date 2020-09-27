export const actionTypes = {
    SET_DATA: "SET_DATA",
    SET_LOGIN: "SET_LOGIN",
    SET_TOKEN: "SET_TOKEN"
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