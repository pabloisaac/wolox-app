import React from "react";
import "./list.css";
import Toolbar from "./Toolbar";
import Table from "./Table";

const List = () => {

  return (
    <div className="flexbox-list">
      <Toolbar />
      <Table/>
    </div>
  );
};

export default List;
