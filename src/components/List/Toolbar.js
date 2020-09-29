import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../storage/reducers";
import { setDataSearch } from "../../storage/actions";
import "./list.css";
import _ from "lodash";

const Toolbar = () => {
  const { state, dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [select, setSelect] = useState("all");

  useEffect(() => {
    let value = getSearch(name, select);
    dispatch(setDataSearch(value));
  }, [name, select]);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeSelect = e => {
    setSelect(e.target.value);
  };

  const getSearch = (name, select) => {
    return searchField(name, select);
  };

  const searchField = (search, filter) => {
    let resp = [];
    if (search !== "" || search !== undefined || filter !== "all") {
      _.forEach(state.list_technologies, item => {
        if (filter !== "all" && item.type === filter) {
            _.forEach(item, (value, key) => {
                if ( search !== "" && key === "tech" && value.toLowerCase().startsWith(search.toLowerCase()) && !_.includes(resp, item)) {
                  resp.push(item);
                } else if ( search === "" && key === "tech" && !_.includes(resp, item)) {
                  resp.push(item);
                }
              });
        } else if (filter === "all") {
            _.forEach(item, (value, key) => {
                if ( search !== "" && key === "tech" && value.toLowerCase().startsWith(search.toLowerCase()) && !_.includes(resp, item)) {
                  resp.push(item);
                } else if ( search === "" && key === "tech" && !_.includes(resp, item)) {
                  resp.push(item);
                }
              });
        }
      });
    } else {
        resp.push(state.list_technologies);
    }
    return resp;
  };

  return (
    <div className="toolbar">
      <div className="area-dv search">
        <label>Nombre de Tecnología: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => onChangeName(e)}
        />
      </div>
      <div className="area-dv select-area">
        <select
          className="select"
          name="select"
          value={select}
          onChange={e => onChangeSelect(e)}
        >
          <option value="all">Todas</option>
          <option value="Back-End">Backend</option>
          <option value="Front-End">Frontend</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>
    </div>
  );
};

export default Toolbar;
