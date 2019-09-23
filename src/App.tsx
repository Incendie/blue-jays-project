import React from "react";

import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./Components/Main/Header";
import Footer from "./Components/Main/Footer";
import Main from "./Components/Main/Main";
import Team from "./Components/Teams/Team";
import PlayerStats from "./Components/Players/PlayerStats";

const App: React.FC<any> = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="wrapper">
          <Route exact path="/" component={Main} />
          <Route path="/team/:teamid" component={Team} />
          <Route path="/player/:playerid" component={PlayerStats} />
        </div>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
