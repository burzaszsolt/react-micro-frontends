import React from 'react';
import Grid from '@material-ui/core/Grid';

import CombinedContextProvider from './context';
import ProductsContainer from './containers/Products';
import CartContainer from './containers/Cart';
import Layout from './components/Layout';
import ProductList from './components/ProductList';

const App = props => {
  return (
    <CombinedContextProvider {...props}>
      <Layout>
        <Grid item xs={12}>
        <ProductsContainer>
          {(products, isProductsLoading) => (
            <CartContainer>
              {(isCartLoading, handleAddToCart) => (
                <ProductList
                  products={products}
                  isProductsLoading={isProductsLoading}
                  isCartLoading={isCartLoading}
                  handleAddToCart={handleAddToCart}
                />
              )}
            </CartContainer>
          )}
          </ProductsContainer>
        </Grid>
      </Layout>
    </CombinedContextProvider>
  );
};

export default App;
