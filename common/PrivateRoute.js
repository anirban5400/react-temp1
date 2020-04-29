import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route, withRouter } from "react-router-dom";
import Auth from './Auth';
import TimeOut from '../components/TimeOut';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    
    render={props =>
    
      Auth.isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
          // <Redirect
          //   to={{
          //     pathname: "/login",
          //     state: { from: props.location }
          //   }}
          // />
          // <Route render={()=>(<div>Please Login</div>)} />
          <Route component={TimeOut} /> 
          // https://stackoverflow.com/questions/36299174/setinterval-in-a-react-app
        )
    }
  />
);
