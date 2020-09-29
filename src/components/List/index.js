import React, { useState, useContext } from "react";
import { AppContext } from "../../storage/reducers";
import { setLogin, setToken } from "../../storage/actions";
import { postLogin } from "../../services/http";
import "./list.css";

const List = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <div className="flexbox-list">
      <div className="toolbar">
        <div className="area-dv search">
          <label>Nombre de Tecnología: </label>
          <input type="text" />
        </div>
        <div className="area-dv select-area">
          <select className="select">
            <option value="all">Todas</option>
            <option value="0">Backend</option>
            <option value="1">Frontend</option>
            <option value="2">Mobile</option>
          </select>
        </div>
        <div className="area-dv btn-search">
          <input type="submit" />
        </div>
      </div>
      <div className="table">
      
      </div>
    </div>
  );
};

export default List;
