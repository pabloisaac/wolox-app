import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../../storage/reducers';

const PrivateRoute = ({ component: Component, redirectTo, ...rest }) => {
    const { state  } = useContext(AppContext);
    return (
        <Route
            {...rest}
            render={props =>
                state.login ? <Component {...props} /> : <Redirect to={redirectTo} />
            }
        />
    );
}
export default PrivateRoute;