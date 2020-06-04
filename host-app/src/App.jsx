import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import StyleProvider from './context/Style';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Body from './components/Body';
import CartContainer from './containers/Cart';

const App = () => {
  return (
    <Router>
      <StyleProvider>
        <Layout>
          <CartContainer>
            {cart => <Navbar cart={cart} />}
          </CartContainer>
          <Body />
        </Layout>
      </StyleProvider>
    </Router>
  );
}

export default App;
