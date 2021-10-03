import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "../views/HomeScreen/HomeScreen";
import Routes from "./routes/Router";

function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeScreen} />
      {Routes.map((route) => (
        <Route path={route.path} component={route.component} />
      ))}
    </BrowserRouter>
  );
}

export default Router;
