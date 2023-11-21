import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Home from "./views/Home";
import Category from "./views/Category";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:category">
            <Category />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
