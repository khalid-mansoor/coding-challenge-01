// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Home from "./views/Home";
import Category from "./views/Category";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:category" component={Category} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
