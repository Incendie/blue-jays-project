import React from "react";
import "./styles/index.scss";
import { HashRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Main from "./Components/Main";
import Team from "./Components/Teams/Team";
import PlayerStats from "./Components/Players/PlayerStats";

const App: React.FC<any> = () => {
  return (
    <Provider store={store}>
      <main className="wrapper">
        <Router>
          <Route exact path="/" component={Main} />
          <Route path="/team/:teamid" component={Team} />
          <Route path="/player/:playerid" component={PlayerStats} />
        </Router>
      </main>
    </Provider>
  );
};

export default App;
