import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ListTechnologies from "./pages/ListTechnologies";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/list" component={ListTechnologies} />
        {/* <PrivateRoute
          exact
          path="/list"
          component={ListTechnologies}
        /> */}
      </Switch>
    </Router>
  );
};

export default App;
