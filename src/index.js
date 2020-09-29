import React, { useReducer } from 'react';
import { initialState, reducer, AppContext } from './storage/reducers';
import ReactDOM from 'react-dom';
import Router from './App';

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