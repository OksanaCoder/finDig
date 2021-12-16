import React from 'react';
import { Switch, Redirect, useLocation } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './Layout.js';
import HomeContainer from '@containers/HomeContainer';
import BaseContainer from '@containers/BaseContainer';
import RegisterPage from '@pages/RegisterPage';
import './transitions.css';
import Login from '@pages/LoginPage';

const AppRouter = () => {
  let location = useLocation();

  return (
    <>
      <Switch location={location}>
        <PublicRoute exact path="/login" component={() => <Login />} />
        <PublicRoute exact path="/register" component={() => <RegisterPage />} />
        {/* <PublicRoute exact path="/register" component={() => <Register />} /> */}
  
     
        <PrivateRoute
          exact
          path={['/']}
          component={() => (
            <BaseContainer>
              <HomeContainer />
            </BaseContainer>
          )}
        />
        <Redirect exact to="/login" />
      </Switch>
    </>
  );
};

export default AppRouter;
