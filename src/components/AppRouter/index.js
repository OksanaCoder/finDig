import React from "react";
import { Switch, Redirect, useLocation } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./Layout.js";
import HomeContainer from "@containers/HomeContainer";
import BaseContainer from "@containers/BaseContainer";
import RegisterPage from "@pages/RegisterPage";
import CompanyDetails from "@components/CompanyDetails";
import "./transitions.css";
import Login from "@pages/LoginPage";
import Companies from "@components/Companies";
import { companies } from "../Companies/companies";
import Blog from '@components/Blog';
import BlogDetails from '@components/BlogDetails';
import Search from '@components/SearchPage'
import Home from '@components/Home'

const AppRouter = () => {
  let location = useLocation();

  return (
    <>
      <Switch location={location}>
        <PublicRoute exact path="/login" component={() => <Login />} />
        <PublicRoute
          exact
          path="/register"
          component={() => <RegisterPage />}
        />
        <PublicRoute exact path="/companies" component={() => <Companies />} />
        <PublicRoute exact path="/blog" component={() => <Blog />} />
        <PublicRoute exact path="/articleDetails" component={() => <BlogDetails />} />
        <PublicRoute exact path="/home" component={() => <Home />} />
          <PublicRoute exact path="/search" component={() => <Search />} />
        
        <PublicRoute
          exact
          path="/companies/:id"
          component={() => (
            <CompanyDetails
  
            />
          )}
        />
        {/* <PublicRoute exact path="/register" component={() => <Register />} /> */}

        <PrivateRoute
          exact
          path={["/"]}
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
