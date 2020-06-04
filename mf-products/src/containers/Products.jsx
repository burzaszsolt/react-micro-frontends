import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../utils/api';

const ProductsContainer = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [isProductsLoading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await api.get('/products');
      setProducts(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {children(
        products,
        isProductsLoading
      )}
    </>
  );
};

ProductsContainer.propTypes = {
  children: PropTypes.func
};

export default ProductsContainer;
