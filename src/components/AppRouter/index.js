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
import Blog from '@components/Blog';
import BlogDetails from '@components/BlogDetails';
import Search from '@components/SearchPage'
import Home from '@components/Home'
import RegisterPageBusiness from "@pages/RegisterPageBusiness/index.js";
import Contacts from '@components/Contacts/index.js'

const AppRouter = () => {
  let location = useLocation();

  return (
    <>
      <Switch location={location}>
        <PublicRoute exact path="/login" component={() => <Login />} />
        <PublicRoute
          exact
          path="/registerPersonal"
          component={() => <RegisterPage />}
        />
         <PublicRoute
          exact
          path="/registerBusiness"
          component={() => <RegisterPageBusiness />}
        />
        <PublicRoute exact path="/companies" component={() => <Companies />} />
        <PublicRoute exact path="/blog" component={() => <Blog />} />
        <PublicRoute exact path="/articleDetails" component={() => <BlogDetails />} />
        <PublicRoute exact path="/home" component={() => <Home />} />
          <PublicRoute exact path="/search" component={() => <Search />} />
          <PublicRoute exact path="/contacts" component={() => <Contacts />} />
        
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
