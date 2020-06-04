import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';

import App from './App';
import data from './mock/products.json';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

ReactDOM.render(
  <App theme={theme} products={data.products} />,
  document.getElementById('root')
);
