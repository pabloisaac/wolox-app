import { actionTypes } from "./actions";
import { createContext } from "react";
export const AppContext = createContext({});

export const initialState = {
  data: [],
  login: false,
  _token: ""
};

export const reducer = (state = {}, action) => {
  let response;
  switch (action.type) {
    case actionTypes.SET_DATA:
      response = Object.assign({}, state, {
        data: action.data
      });
      return response;

    case actionTypes.SET_LOGIN:
      response = Object.assign({}, state, {
        login: action.data
      });
      return response;

    case actionTypes.SET_TOKEN:
      response = Object.assign({}, state, {
        _token: action.data
      });
      return response;

    default:
      return state;
  }
};
