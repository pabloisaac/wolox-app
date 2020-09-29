import React, { useReducer } from 'react';
import { initialState, reducer, AppContext } from './storage/reducers';
import ReactDOM from 'react-dom';
import Router from './App';
import './assets/Fonts/open_sans/OpenSans.woff';
import './index.css';

const App = () => {
    let [state, dispatch] = useReducer(reducer, initialState);
    let value = { state, dispatch };

      return (
        <AppContext.Provider value={value}>
          <Router />
        </AppContext.Provider>
      );
}


ReactDOM.render(<App />,document.getElementById('root'));