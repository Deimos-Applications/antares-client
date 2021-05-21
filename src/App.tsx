import React from 'react';
import { Provider } from 'react-redux';
import RootRouter from './app.router';
import { store } from './app.store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootRouter></RootRouter>
    </Provider>
  );
};

export default App;
