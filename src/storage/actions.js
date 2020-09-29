export const actionTypes = {
    SET_DATA_TECHNOLOGIES: "SET_DATA_TECHNOLOGIES",
    SET_DATA_SEARCH: "SET_DATA_SEARCH",
    SET_REDIRECT_LOGIN:"SET_REDIRECT_LOGIN",
    SET_REDIRECT_LIST:"SET_REDIRECT_LIST",
}

export const setDataTechnologies = data => ({
    type: actionTypes.SET_DATA_TECHNOLOGIES,
    data 
});

export const setDataSearch = data => ({
    type: actionTypes.SET_DATA_SEARCH,
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