import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import Test from "./Components/Teams";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Test />
      </div>
    </Provider>
  );
}

export default App;
