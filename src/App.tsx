import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import Teams from "./Components/Teams";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Teams />
    </Provider>
  );
};

export default App;
