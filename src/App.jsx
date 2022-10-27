import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './header/Header';
import Footer from './footer/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <div className="main-container">
        <Header />
        {/* <MainContent />*/}
        <Footer />
      </div>
    </Provider>
  );
};
export default App;
