import { actionTypes } from "./actions";
import { createContext } from "react";
export const AppContext = createContext({});

export const initialState = {
  list_technologies: [],
  list_search: [],
  redirectLogin: false,
  redirectList: false
};

export const reducer = (state = {}, action) => {
  let response;
  switch (action.type) {
    case actionTypes.SET_DATA_TECHNOLOGIES:
      response = Object.assign({}, state, {
        list_technologies: action.data
      });
      return response;
      
    case actionTypes.SET_DATA_SEARCH:
      response = Object.assign({}, state, {
        list_search: action.data
      });
      return response;

    case actionTypes.SET_REDIRECT_LOGIN:
      response = Object.assign({}, state, {
        redirectLogin: action.data
      });
      return response;

    case actionTypes.SET_REDIRECT_LIST:
      response = Object.assign({}, state, {
        redirectList: action.data
      });
      return response;

    default:
      return state;
  }
};
