import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import { AppContext } from './storage/reducers';
import { setLogin } from './storage/actions';
import Landing from './pages/Landing';
import Login from './pages/Login';
import ListTechnologies from './pages/ListTechnologies';

const App = () => {
  const { state, dispatch  } = useContext(AppContext);

  useEffect(() => {
    localStorage.clear()
    let checkLogin = localStorage.getItem('remember_password');
    if(!checkLogin)
      dispatch(setLogin(true))
    else
     dispatch(setLogin(false))
  }, [])

    return (
      <Router>
          <Switch>
              <Route exact path="/" component={Landing} />
              <PrivateRoute exact path='/login' component={Login} redirectTo="/list"/>
              <PrivateRoute exact path='/list' component={ListTechnologies} redirectTo="/login"/>
          </Switch>
      </Router>

    );
}

export default App;

{/* <Fragment>
{!state.login && <Login />}
{state.login && <Landing />}
</Fragment> */}