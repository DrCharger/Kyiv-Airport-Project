import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      {/* <MainContent />
      <Footer /> */}
    </Provider>
  );
};
export default App;
