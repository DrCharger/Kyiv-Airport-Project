import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './header/Header';
import Footer from './footer/Footer';
import MainContent from './mainComtent/MainContent';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="main-container">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
