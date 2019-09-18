import React from 'react';
import './styles/index.scss';

import { Provider } from 'react-redux';
import store from './store';

import Main from './Components/Main';

const App: React.FC<any> = () => {
  return (
    <Provider store={store}>
      <h1>Welcome!</h1>
      <p>What are you looking for today?</p>

      <Main />
    </Provider>
  );
};

export default App;
