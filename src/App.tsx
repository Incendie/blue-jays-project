import React from "react";
import "./styles/index.scss";
import { HashRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Main from "./Components/Main";
import Team from "./Components/Teams/Team";

const App: React.FC<any> = () => {
  return (
    <Provider store={store}>
      <Router>
        <h1>Welcome!</h1>
        <p>What are you looking for today?</p>

        <Route exact path="/" component={Main} />
        <Route path="/team/:teamid" component={Team} />
      </Router>
    </Provider>
  );
};

export default App;
