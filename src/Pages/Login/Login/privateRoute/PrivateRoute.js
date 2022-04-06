import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoding } = useAuth();
    if (isLoding)
    {
        return <Spinner animation="border" variant="dark" />
        }
    return (
        <Route
      {...rest}
      render={({ location }) =>
          user.displayName? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;