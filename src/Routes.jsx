import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./Pages/Landing Page/LandingPage";

const Routes = () => {
  const routes = [
    {
      path: "/",
      render: LandingPage,
    },
    {
      path: null,
      render: LandingPage,
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
    </Switch>
  );
};

export default Routes;
