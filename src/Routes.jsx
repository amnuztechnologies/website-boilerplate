import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import LandingPage from "./Pages/Landing Page/LandingPage";

const Routes = () => {
  const routes = [
    {
      path: "/",
      render: LandingPage,
    },
    {
      path: null,
      render: Redirect,
    },
  ];
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact
          render={(props) => (
            <route.render {...props} />
          )}
        />
      ))}
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
