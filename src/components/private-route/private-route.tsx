import React, {Component, useContext} from 'react'
import { Navigate, Route } from 'react-router-dom'
import { AuthContext } from '../../context';

const PrivateRoute = ({ component, ...rest }: any) => {
    const authContext = useContext(AuthContext);

  const isLoggedIn = authContext.isAuthenticated

  return (
    <Route
      {...rest}
      render={(props: any) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: '/authenticate' }} />
        )
      }
      }
    />
  )
}

export { PrivateRoute }