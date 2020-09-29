import React, { useEffect, useContext } from "react";
import { AppContext } from "../../storage/reducers";
import { setDataTechnologies, setDataSearch } from "../../storage/actions";
import { getData } from "../../services/http";
import "./list.css";
import _ from "lodash";

const Table = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      let response = await getData();
      dispatch(setDataTechnologies(response));
      dispatch(setDataSearch(response));
    })();
  }, []);

  const buildCell = cell => {
    let cells = [];
    _.forEach(state.list_search, (item, index) => {
      _.forEach(item, (value, key) => {
        if (key === cell) {
          cells.push(
            <p className="css-content cell-size" key={value + index}>
              {value}
            </p>
          );
        }
      });
    });
    return cells;
  };

  const buildCellLogo = cell => {
    let cells = [];
    _.forEach(state.list_search, (item, index) => {
      _.forEach(item, (value, key) => {
        if (key === cell) {
          cells.push(
            <div className="css-content cell-size" key={index + value}>
              <img src={value} alt={value + index} className="img-content" />
            </div>
          );
        }
      });
    });
    return cells;
  };

  const onSort = (e) =>{
    if(e.target.name === "asc"){
      let order = _.orderBy(state.list_search, ['tech'], ['asc']);
      dispatch(setDataSearch(order));
    }
    if(e.target.name === "desc"){
      let order = _.orderBy(state.list_search, ['tech'], ['desc']);
      dispatch(setDataSearch(order));
    }
  }

  return (
    <div>
      <div className="sort-table">
        <input type="submit" name="asc" value="ASC" onClick={ e => onSort(e)}/>
        <input type="submit" name="desc" value="DESC" onClick={ e => onSort(e)}/>
      </div>
      <div className="responsive-table">
        <section className="css-section-tech">
          <h2 className="css-content header-size">Tecnologia</h2>
          {buildCell("tech")}
        </section>

        <section className="css-section-year">
          <h2 className="css-content header-size">Año</h2>
          {buildCell("year")}
        </section>

        <section className="css-section-author">
          <h2 className="css-content header-size">Autor</h2>
          {buildCell("author")}
        </section>

        <section className="css-section-license">
          <h2 className="css-content header-size">Licencia</h2>
          {buildCell("license")}
        </section>

        <section className="css-section-language">
          <h2 className="css-content header-size">Lenguaje</h2>
          {buildCell("language")}
        </section>

        <section className="css-section-type">
          <h2 className="css-content header-size">Tipo</h2>
          {buildCell("type")}
        </section>

        <section className="css-section-logo">
          <h2 className="css-content header-size">Logo</h2>
          {buildCellLogo("logo")}
        </section>
      </div>
      <div className="total-table">
        <label>Total de tecnlogias: {_.size(state.list_search)}</label>
      </div>
    </div>
  );
};

export default Table;
