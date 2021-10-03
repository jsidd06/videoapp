import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LabelBottomNavigation from "../views/BottomNavigation/BottomNavigation";
import HomeScreen from "../views/HomeScreen/HomeScreen";
import Routes from "./routes/Router";

function Router(props) {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeScreen} />
      
      {Routes.map((route) => (
        <Route path={route.path} component={route.component} />
      ))}
      <LabelBottomNavigation />
    </BrowserRouter>
  );
}

export default Router;
