import React, { useContext, useEffect } from "react";
import { AppContext } from "../../storage/reducers";
import { setRedirectList, setRedirectLogin } from "../../storage/actions";

import "./list.css";
import Toolbar from "./Toolbar";
import Table from "./Table";
import { Redirect } from "react-router-dom";

const List = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch(setRedirectLogin(false));
    let token = sessionStorage.getItem("token");
    let storage = localStorage.getItem("user_data");
    if (storage === null && !token) dispatch(setRedirectList(true));
    else dispatch(setRedirectList(false));
  }, []);

  return (
    <div className="flexbox-list">
      {state.redirectList && <Redirect to="/login" />}
      <Toolbar />
      <Table />
    </div>
  );
};

export default List;
